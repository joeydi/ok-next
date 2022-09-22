import dynamic from "next/dynamic";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { getProjectPaths, getProject } from "../../lib/work";

const ProjectImages = dynamic(() => import("../../components/project-images"), { ssr: false });

const Project = ({ project }) => {
    return (
        <div className="project">
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>{project.frontmatter.title}</h1>

                            <div className="project-meta">
                                {project.frontmatter.role && (
                                    <p>
                                        <span className="glyphicon glyphicon-user"></span>&nbsp;
                                        <strong>Role: </strong>
                                        {project.frontmatter.role}
                                    </p>
                                )}

                                {project.frontmatter.client && (
                                    <p>
                                        <span className="glyphicon glyphicon-briefcase"></span>&nbsp;
                                        <strong>Agency: </strong>
                                        {project.frontmatter.client}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <a className="btn" href={project.frontmatter.url} target="_blank" rel="noopener nofollow">
                                View Website <span className="glyphicon glyphicon-chevron-right"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="project-heading row">
                        <div className="col-lg-10">
                            <MDXRemote {...project} />
                        </div>
                    </div>
                    <ProjectImages images={project.frontmatter.images} />
                </div>
            </div>

            {/* <div id="project-pagination">
    <div className="container">
        <div className="row">
            <div className="previous col-xs-6">
                <?php if ( $previous = get_next_post() ) : ?>
                <a href="<?php echo get_permalink( $previous->ID ); ?>">
                    <?php $roles = wp_get_post_terms( $previous->ID, 'role', array( 'fields' => 'names' ) ); ?>
                    <?php echo get_the_post_thumbnail( $previous->ID, 'medium' ); ?>
                    <h3 className="btn"><span className="glyphicon glyphicon-chevron-left"></span> Previous Project</h3>
                    <strong><?php echo get_the_title( $previous->ID ); ?></strong>
                    <p><?php echo implode( ', ', $roles ); ?></p>
                </a>
                <?php endif; ?>
            </div>
            <div className="next col-xs-6">
                <?php if ( $next = get_previous_post() ) : ?>
                <a href="<?php echo get_permalink( $next->ID ); ?>">
                    <?php $roles = wp_get_post_terms( $next->ID, 'role', array( 'fields' => 'names' ) ); ?>
                    <?php echo get_the_post_thumbnail( $next->ID, 'medium' ); ?>
                    <h3 className="btn">Next Project <span className="glyphicon glyphicon-chevron-right"></span></h3>
                    <strong><?php echo get_the_title( $next->ID ); ?></strong>
                    <p><?php echo implode( ', ', $roles ); ?></p>
                </a>
                <?php else : ?>
                    <h3>That's all She Wrote!</h3>
                    <p>Thanks for exploring my portfolio of recent<br />web design &amp; development projects.</p>
                    <a className="btn" href="/contact/"><span className="glyphicon glyphicon-phone-alt"></span> Get In Touch</a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div> */}
        </div>
    );
};

export async function getStaticPaths() {
    const paths = getProjectPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const source = getProject(params.slug);
    const project = await serialize(source, { parseFrontmatter: true });

    return { props: { project } };
}

export default Project;
