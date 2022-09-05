import Link from "next/link";
import Head from "next/head";

import { fetchAPI } from "../lib/api";

export default function Work({ projects }) {
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
                        {projects.data.map((project, i) => {
                            const featuredImage = project.attributes.featuredImage.data?.attributes || "";

                            return (
                                <div className="col-sm-6 col-lg-4" key={i}>
                                    <Link href={`/work/${project.attributes.slug}`}>
                                        <a className="project-excerpt">
                                            <img src={featuredImage.url} alt={featuredImage.alternativeText} />
                                            <h2>{project.attributes.title}</h2>
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

export async function getServerSideProps() {
    const projects = await fetchAPI("projects", {
        fields: ["title", "slug"],
        populate: {
            featuredImage: {
                fields: ["url"],
            },
        },
    });

    return {
        props: {
            projects,
        },
    };
}
