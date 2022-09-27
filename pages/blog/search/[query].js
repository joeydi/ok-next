import { getBlogProps, searchPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    return <BlogIndex {...props} />;
}

export async function getServerSideProps({ params }) {
    let props = await getBlogProps();
    props.posts = await searchPosts(params.query);

    return { props };
}
