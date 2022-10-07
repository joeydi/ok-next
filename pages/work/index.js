import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import { getProjects } from "@/lib/work";

export default function Work({ projects }) {
    const router = useRouter();
    const seo = {
        title: "Work Archive",
        canonical: `${process.env.BASE_URL}${router.asPath}`,
    };

    return (
        <div className="work">
            <NextSeo {...seo} />
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
                                    <Link href={`/work/${project.slug}`}>
                                        <a className="project-excerpt">
                                            <Image src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
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
    const projects = await getProjects();

    return {
        props: {
            projects,
        },
    };
}
