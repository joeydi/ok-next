import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { getPosts } from "@/lib/blog";

import PostStandard from "@/components/post-standard";
import PostLink from "@/components/post-link";
import PostQuote from "@/components/post-quote";
import PostVideo from "@/components/post-video";

const getPostComponent = function (format) {
    const components = {
        link: PostLink,
        quote: PostQuote,
        video: PostVideo,
    };

    return components[format] ?? PostStandard;
};

export default function Blog({ posts }) {
    return (
        <div className="work">
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
                            {posts.map((post, i) => {
                                const PostComponent = getPostComponent(post.frontmatter.format);
                                return <PostComponent post={post} key={i} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    let posts = await getPosts();

    return {
        props: {
            posts,
        },
    };
}
