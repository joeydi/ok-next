import Head from "next/head";
import Link from "next/link";
import { getPostPageCount, getPostPagePaths, getPaginatedPosts } from "@/lib/blog";
import Post from "@/components/post";

import ChevronLeft from "@/icons/chevron-left.svg";
import ChevronRight from "@/icons/chevron-right.svg";

export default function BlogPost({ posts, previousPage, nextPage }) {
    return (
        <div className="blog">
            <Head>
                <title key="title">Blog - Okay Plus</title>
            </Head>
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <h1 className="col-lg-10">Testing</h1>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            {posts.map((post, i) => (
                                <Post post={post} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id="blog-pagination">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 d-flex">
                            {previousPage && (
                                <div className="previous me-20">
                                    <Link href={`/blog/${previousPage}/`}>
                                        <a className="btn">
                                            <ChevronLeft className="icon me-5" />
                                            Previous Page
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {nextPage && (
                                <div className="next ms-auto">
                                    <Link href={`/blog/${nextPage}/`}>
                                        <a className="btn">
                                            Next Page
                                            <ChevronRight className="icon ms-5" />
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getPostPagePaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const page = params.page * 1;
    const posts = await getPaginatedPosts(page);
    const pageCount = getPostPageCount();
    const previousPage = page && page > 1 ? page - 1 : null;
    const nextPage = page && page < pageCount ? page + 1 : null;

    return {
        props: {
            posts,
            previousPage,
            nextPage,
        },
    };
}
