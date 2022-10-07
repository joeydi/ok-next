import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import Quote from "@/icons/quote.svg";

export default function PostQuote({ post }) {
    return (
        <div className="quote">
            <blockquote>
                <MDXRemote {...post} />
            </blockquote>

            <h1 className="quote-source">
                &mdash;&nbsp;
                {post.frontmatter.link ? <a href={post.frontmatter.link}>{post.frontmatter.title}</a> : post.frontmatter.title}
            </h1>

            <Link href={`/${post.slug}`}>
                <a className="permalink">
                    <span className="visually-hidden">Permalink</span>
                    <Quote width="24" height="24" />
                </a>
            </Link>
        </div>
    );
}
