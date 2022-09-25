import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

export default function PostLink({ post }) {
    const date = post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString("en-us", { year: "numeric", month: "long", day: "numeric" }) : null;

    return (
        <div className="post video">
            <div className="aspect aspect-widescreen" dangerouslySetInnerHTML={{ __html: post.frontmatter.video }} />
            <div className="post-content">
                <h1>
                    <Link href={`/${post.slug}`}>{post.frontmatter.title}</Link>
                </h1>
                <MDXRemote {...post} />
            </div>
            <div className="post-meta">
                {date && (
                    <div className="date">
                        <span className="icon-clock"></span>&nbsp;
                        {date}
                    </div>
                )}

                {!!post.frontmatter.tags.length && (
                    <div className="tags">
                        <span className="icon-tag"></span>&nbsp;
                        {post.frontmatter.tags.map((tag, i) => {
                            return (
                                <Link href={`/blog/tag/${tag}`} key={i}>
                                    {tag}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
