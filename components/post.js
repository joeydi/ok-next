import PostStandard from "@/components/post-standard";
import PostLink from "@/components/post-link";
import PostQuote from "@/components/post-quote";
import PostVideo from "@/components/post-video";

export default function Post({ post }) {
    const components = {
        link: PostLink,
        quote: PostQuote,
        video: PostVideo,
    };

    const Component = components[post.frontmatter.format] ?? PostStandard;

    return <Component post={post} />;
}
