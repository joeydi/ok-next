import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

export default function PostStandard({ post }) {
    const featuredImage = post.frontmatter.featuredImage || null;
    const date = post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString("en-us", { year: "numeric", month: "long", day: "numeric" }) : null;

    return (
        <div className="post">
            {featuredImage && (
                <div className="post-image">
                    <Image src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
                </div>
            )}

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
                        &nbsp;by <Link href="/contact">Joe di Stefano</Link>
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
