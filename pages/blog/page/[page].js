import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";
import { getBlogProps, getPostPageCount, getPostPagePaths, getPaginatedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const seo = useDefaultSeo({
        title: `Blog - Page ${props.page} of ${props.pageCount}`,
    });

    return (
        <>
            <NextSeo {...seo} />
            <BlogIndex {...props} />
        </>
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
    const pageCount = getPostPageCount();

    let props = await getBlogProps();
    props.page = page;
    props.pageCount = pageCount;
    props.posts = await getPaginatedPosts(page);
    props.previousPage = page && page > 1 ? page - 1 : null;
    props.nextPage = page && page < pageCount ? page + 1 : null;

    return { props };
}
