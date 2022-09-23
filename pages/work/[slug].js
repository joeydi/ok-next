import dynamic from "next/dynamic";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { getProjectPaths, getProjectData } from "@/lib/work";

import User from "@/icons/user.svg";
import Briefcase from "@/icons/briefcase.svg";
import ChevronRight from "@/icons/chevron-right.svg";

const ProjectImages = dynamic(() => import("@/components/project-images"), { ssr: false });

const Project = ({ project, next, previous }) => {
    const { ref, inView } = useInView();

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
                                        <User className="icon me-10" />
                                        <strong>Role:</strong>&nbsp;
                                        {project.frontmatter.role}
                                    </p>
                                )}

                                {project.frontmatter.client && (
                                    <p>
                                        <Briefcase className="icon me-10" />
                                        <strong>Agency:</strong>&nbsp;
                                        {project.frontmatter.client}
                                    </p>
                                )}
                            </div>
                        </div>
                        {project.frontmatter.url && (
                            <div className="col-md-3">
                                <a className="btn" href={project.frontmatter.url} target="_blank" rel="noopener noreferrer">
                                    View Website
                                    <ChevronRight className="icon ms-10" />
                                </a>
                            </div>
                        )}
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

            <div id="project-pagination" ref={ref} className={inView ? "active" : ""}>
                <div className="container">
                    <div className="row">
                        <div className="previous col-6">
                            <Link href={`/work/${previous.slug}`}>
                                <a>
                                    <div className="thumbnail">
                                        <Image src={previous.frontmatter.featuredImage.src} alt={previous.frontmatter.featuredImage.alt} width={previous.frontmatter.featuredImage.width} height={previous.frontmatter.featuredImage.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
                                    </div>
                                    <h3 className="btn">
                                        <span className="glyphicon glyphicon-chevron-left"></span> Previous Project
                                    </h3>
                                    <strong>{previous.frontmatter.title}</strong>
                                    <p>{previous.frontmatter.role}</p>
                                </a>
                            </Link>
                        </div>
                        <div className="next col-6">
                            <Link href={`/work/${next.slug}`}>
                                <a>
                                    <div className="thumbnail">
                                        <Image src={next.frontmatter.featuredImage.src} alt={next.frontmatter.featuredImage.alt} width={next.frontmatter.featuredImage.width} height={next.frontmatter.featuredImage.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
                                    </div>
                                    <h3 className="btn">
                                        Next Project <span className="glyphicon glyphicon-chevron-right"></span>
                                    </h3>
                                    <strong>{next.frontmatter.title}</strong>
                                    <p>{next.frontmatter.role}</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
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
    const projectData = await getProjectData(params.slug);

    return { props: projectData };
}

export default Project;
