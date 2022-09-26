import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

import Bookmark from "@/icons/bookmark.svg";

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
                    <span className="visually-hidden">Permalink</span>
                    <Bookmark width="20" height="20" />
                </a>
            </Link>
        </div>
    );
}
