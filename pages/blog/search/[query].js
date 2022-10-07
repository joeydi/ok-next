import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getBlogProps, searchPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const router = useRouter();
    const seo = {
        title: `You searched for ${props.query}`,
        canonical: `${process.env.BASE_URL}${router.asPath}`,
    };

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
