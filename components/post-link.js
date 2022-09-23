import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

export default function PostLink({ post }) {
    return (
        <div className="link">
            <h1>
                <a href={post.frontmatter.link} target="_blank" rel="noopener noreferrer">
                    {post.frontmatter.title}
                </a>
            </h1>

            <MDXRemote {...post} />

            <Link href={`/${post.slug}`}>
                <a className="permalink">
                    <span>Permalink</span>
                </a>
            </Link>
        </div>
    );
}
