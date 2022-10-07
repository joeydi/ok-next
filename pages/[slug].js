import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";
import { getPostPaths, getPostData } from "@/lib/blog";
import Post from "@/components/post";

export default function BlogPost({ post }) {
    const seo = useDefaultSeo({
        title: post.frontmatter.title,
        openGraph: {
            images: post.frontmatter.featuredImage ? [{ url: post.frontmatter.featuredImage?.src, alt: post.frontmatter.featuredImage?.alt }] : null,
        },
    });

    return (
        <div id="content">
            <NextSeo {...seo} />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <Post post={post} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getPostPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.slug);

    return { props: postData };
}
