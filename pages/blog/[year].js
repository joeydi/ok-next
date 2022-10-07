import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";
import { getBlogProps, getPostYearPaths, getYearPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const seo = useDefaultSeo({
        title: `Blog Archive - ${props.year}`,
    });

    return (
        <>
            <NextSeo {...seo} />
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
