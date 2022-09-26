import { getPostTagPaths, getTaggedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    return <BlogIndex {...props} />;
}

export async function getStaticPaths() {
    const paths = await getPostTagPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = await getTaggedPosts(params.tag);

    return {
        props: {
            posts,
        },
    };
}
