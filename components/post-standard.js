import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

export default function PostStandard({ post }) {
    const featuredImage = post.frontmatter.featuredImage || null;

    return (
        <div className="post">
            {featuredImage && (
                <div className="post-image">
                    <Image src={featuredImage.src} alt={featuredImage.alt} width={featuredImage.width} height={featuredImage.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
                </div>
            )}

            <div className="post-content">
                <h1>
                    <a href="">{post.frontmatter.title}</a>
                </h1>
                <MDXRemote {...post} />
            </div>

            <div className="post-meta">
                <div className="date">
                    <span className="icon-clock"></span>
                    {/* <?php the_time( get_option( 'date_format' ) ); ?> */}
                    by <a href="<?php echo home_url( '/contact/' ); ?>">Joe di Stefano</a>
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
