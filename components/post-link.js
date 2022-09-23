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

            <a href="" className="permalink">
                <span>Permalink</span>
            </a>
        </div>
    );
}
