import { getPostPageCount, getPostPagePaths, getPaginatedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    return <BlogIndex {...props} />;
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
