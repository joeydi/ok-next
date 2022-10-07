import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getBlogProps, getPaginatedPosts } from "@/lib/blog";
import BlogIndex from "@/components/blog-index";

export default function Blog(props) {
    const router = useRouter();
    const seo = {
        title: "Blog",
        canonical: `${process.env.BASE_URL}${router.asPath}`,
    };

    return (
        <>
            <NextSeo {...seo} />
            <BlogIndex {...props} />
        </>
    );
}

export async function getStaticProps() {
    let props = await getBlogProps();

    props.posts = await getPaginatedPosts();
    props.nextPage = 2;

    return { props };
}
