import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getBlogProps, getPostYearPaths, getYearPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function BlogSearch(props) {
    const router = useRouter();
    const seo = {
        title: `Blog Archive - ${props.year}`,
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
    const paths = await getPostYearPaths();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let props = await getBlogProps();
    props.year = params.year;
    props.posts = await getYearPosts(params.year);

    return { props };
}
