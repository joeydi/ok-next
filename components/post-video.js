import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";

export default function PostLink({ post }) {
    return (
        <div class="post video">
            <div className="aspect aspect-widescreen" dangerouslySetInnerHTML={{ __html: post.frontmatter.video }} />
            <div class="post-content">
                <h1>
                    <Link href={`/${post.slug}`}>{post.frontmatter.title}</Link>
                </h1>
                <MDXRemote {...post} />
            </div>
            <div class="post-meta">
                <div class="date">
                    <span class="icon-clock"></span>
                    {/* <?php the_time( get_option( 'date_format' ) ); ?> */}
                </div>

                {post.frontmatter.tags && (
                    <div className="tags">
                        <span className="icon-tag"></span>
                        {post.frontmatter.tags}
                    </div>
                )}
            </div>
        </div>
    );
}
