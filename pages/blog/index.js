import { getBlogProps, getPaginatedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function Blog(props) {
    return <BlogIndex {...props} />;
}

export async function getStaticProps() {
    let props = await getBlogProps();

    props.posts = await getPaginatedPosts();
    props.nextPage = 2;

    return { props };
}
