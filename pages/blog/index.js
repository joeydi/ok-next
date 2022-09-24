import Head from "next/head";
import Link from "next/link";
import { getPaginatedPosts } from "@/lib/blog";
import Post from "@/components/post";

import ChevronRight from "@/icons/chevron-right.svg";

export default function Blog({ posts }) {
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
                                <div className="next ms-auto">
                                    <Link href="/blog/2">
                                        <a className="btn">
                                            Next Page
                                            <ChevronRight className="icon ms-5" />
                                        </a>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = await getPaginatedPosts();

    return {
        props: {
            posts,
        },
    };
}
