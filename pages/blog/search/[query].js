import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";
import { getBlogProps, searchPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const seo = useDefaultSeo({
        title: `You searched for ${props.query}`,
    });

    return (
        <>
            <NextSeo {...seo} />
            <BlogIndex {...props} />
        </>
    );
}

export async function getServerSideProps({ params }) {
    let props = await getBlogProps();
    props.posts = await searchPosts(params.query);

    return { props };
}
