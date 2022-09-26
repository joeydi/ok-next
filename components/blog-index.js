import Head from "next/head";
import Link from "next/link";

import BlogSearch from "@/components/blog-search";
import Post from "@/components/post";

import ChevronLeft from "@/icons/chevron-left.svg";
import ChevronRight from "@/icons/chevron-right.svg";

export default function BlogIndex({ posts, previousPage, nextPage }) {
    console.log(posts, previousPage, nextPage);
    return (
        <div className="blog">
            <Head>
                <title key="title">Blog - Okay Plus</title>
            </Head>
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-2">
                            <BlogSearch />
                        </div>
                        <div className="col-sm-6">
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    Archives <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>Testing</li>
                                </ul>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    Tags <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" role="menu">
                                    <li>Testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            {posts.map((post, i) => (
                                <Post post={post} key={i} />
                            ))}
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
                                    <Link href={`/blog/${previousPage}/`}>
                                        <a className="btn">
                                            <ChevronLeft className="icon me-5" />
                                            Previous Page
                                        </a>
                                    </Link>
                                </div>
                            )}
                            {nextPage && (
                                <div className="next ms-auto">
                                    <Link href={`/blog/${nextPage}/`}>
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
