import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getBlogProps, getPostTagPaths, getTaggedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const router = useRouter();
    const seo = {
        title: `Blog Archive - ${props.tag}`,
        canonical: `${process.env.BASE_URL}${router.asPath}`,
    };

    return (
        <>
            <NextSeo {...seo} />
            <BlogIndex {...props} />
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getPostTagPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let props = await getBlogProps();
    props.tag = params.tag;
    props.posts = await getTaggedPosts(params.tag);

    return { props };
}
