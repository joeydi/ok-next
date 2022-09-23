import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

export default function PostQuote({ post }) {
    return (
        <div class="quote">
            <blockquote>
                <MDXRemote {...post} />
            </blockquote>

            <p class="quote-source">
                &mdash;&nbsp;
                {post.frontmatter.link ? <a href={post.frontmatter.link}>{post.frontmatter.title}</a> : post.frontmatter.title}
            </p>

            <Link href={`/${post.slug}`}>
                <a className="permalink">
                    <span>Permalink</span>
                </a>
            </Link>
        </div>
    );
}
