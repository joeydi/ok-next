import Link from "next/link";

import DropdownMenu from "@/components/dropdown-menu";
import BlogSearch from "@/components/blog-search";
import Post from "@/components/post";

import ChevronLeft from "@/icons/chevron-left.svg";
import ChevronRight from "@/icons/chevron-right.svg";

export default function BlogIndex({ posts, previousPage, nextPage, years, tags }) {
    return (
        <div className="blog">
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 offset-lg-1 col-xl-4 offset-xl-2">
                            <BlogSearch />
                        </div>
                        <div className="col-sm-6">
                            <DropdownMenu
                                name="Archives"
                                items={years.map((year) => ({
                                    title: year,
                                    url: `/blog/${year}`,
                                }))}
                            />
                            <DropdownMenu
                                name="Tags"
                                items={tags.map((tag) => ({
                                    title: tag,
                                    url: `/blog/tag/${tag}`,
                                }))}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            {posts.length ? (
                                posts.map((post, i) => <Post post={post} key={i} />)
                            ) : (
                                <div className="d-flex align-items-center">
                                    <Link href="/blog">
                                        <a className="btn btn-light me-20">
                                            <ChevronLeft className="icon me-5" />
                                            Go Back
                                        </a>
                                    </Link>
                                    <h2 className="mb-0">No posts were found.</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div id="blog-pagination">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 d-flex">
                            {previousPage && (
                                <div className="previous me-20">
                                    <Link href={`/blog/page/${previousPage}/`}>
                                        <a className="btn">
                                            <ChevronLeft className="icon me-5" />
                                            Previous Page
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {nextPage && (
                                <div className="next ms-auto">
                                    <Link href={`/blog/page/${nextPage}/`}>
                                        <a className="btn">
                                            Next Page
                                            <ChevronRight className="icon ms-5" />
                                        </a>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
