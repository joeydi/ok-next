import { getPaginatedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function Blog(props) {
    return <BlogIndex {...props} />;
}

export async function getStaticProps() {
    const posts = await getPaginatedPosts();

    return {
        props: {
            posts,
            nextPage: 2,
        },
    };
}
