import { NextSeo } from "next-seo";
import { getBlogProps, getPostYearPaths, getYearPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    return (
        <>
            <NextSeo title={`Blog Archive - ${props.year}`} />
            <BlogIndex {...props} />
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getPostYearPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let props = await getBlogProps();
    props.year = params.year;
    props.posts = await getYearPosts(params.year);

    return { props };
}
