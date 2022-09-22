import { fetchAPI } from "@/lib/api";

export default function Post({ post }) {
    return <h1>This is a blog post: {post.attributes.title}</h1>;
}

export async function getStaticPaths() {
    const posts = await fetchAPI("posts", { fields: ["slug"] });

    return {
        paths: posts.data.map((post) => ({
            params: {
                slug: post.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = await fetchAPI("posts", {
        filters: {
            slug: params.slug,
        },
    });

    return {
        props: { post: posts.data[0] },
        revalidate: 60,
    };
}
