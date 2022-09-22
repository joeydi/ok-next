import Link from "next/link";
import Head from "next/head";

import { getProjects } from "../lib/work";

export default function Work({ projects }) {
    console.log("projects", projects);

    return (
        <div className="work">
            <Head>
                <title key="title">Web Design &amp; Development Portfolio - Okay Plus</title>
            </Head>
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <h1 className="col-lg-10">
                            Jack of all trades? Sure.
                            <br />
                            Master of none? You be the judge.
                        </h1>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="row">
                        {projects.map((project, i) => {
                            const featuredImage = project.frontmatter.featuredImage || "";

                            return (
                                <div className="col-sm-6 col-lg-4" key={i}>
                                    <Link href={`/work/${project.frontmatter.slug}`}>
                                        <a className="project-excerpt">
                                            <img src={featuredImage.url} alt={featuredImage.alternativeText} />
                                            <h2>{project.frontmatter.title}</h2>
                                        </a>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let projects = await getProjects();

    return {
        props: {
            projects,
        },
    };
}
