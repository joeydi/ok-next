import fs from "fs";
import path from "path";
import { Index } from "flexsearch";
import { serialize } from "next-mdx-remote/serialize";

const perPage = 10;

export function getPostFiles() {
    let files = fs.readdirSync(path.join("content", "posts"));

    // Remove drafts
    files = files.filter((file) => file.indexOf("_") !== 0);

    return files;
}

export function getPostPaths() {
    const files = getPostFiles();

    return files.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(".mdx", ""),
            },
        };
    });
}

export function getPostPageCount() {
    const files = getPostFiles();
    const pageCount = Math.ceil(files.length / perPage);

    return pageCount;
}

export function getPostPagePaths() {
    const pageCount = getPostPageCount();

    return [...Array(pageCount).keys()].map((page) => {
        page = (page + 1).toString();

        return {
            params: { page },
        };
    });
}

export async function getTags() {
    const posts = await getPosts();
    const tags = new Set();

    posts.map((post) => {
        post.frontmatter.tags.forEach((tag) => tags.add(tag));
    });

    return Array.from(tags);
}

export async function getPostTagPaths() {
    const tags = await getTags();

    return tags.map((tag) => {
        return {
            params: {
                tag,
            },
        };
    });
}

export async function getPosts() {
    const files = getPostFiles();

    // Parse MDX for each post
    let posts = await Promise.all(
        files.map(async (fileName) => {
            const source = fs.readFileSync(path.join("content", "posts", fileName));
            const post = await serialize(source, { parseFrontmatter: true });

            post.slug = fileName.replace(".mdx", "");
            return post;
        })
    );

    // Sort posts by date
    posts = posts.sort((a, b) => (a.frontmatter.date <= b.frontmatter.date ? 1 : -1));

    return posts;
}

export async function getPaginatedPosts(page = 1) {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    // Paginate
    let posts = await getPosts();
    posts = posts.slice(start, end);

    return posts;
}

export async function getTaggedPosts(tag) {
    const posts = await getPosts();

    return posts.filter((post) => {
        return post.frontmatter.tags.includes(tag);
    });
}

export async function getPostData(slug) {
    const data = {};
    const posts = await getPosts();
    const postIndex = posts.findIndex((post) => post.slug === slug);

    // Get data for main post
    data.post = posts[postIndex];

    // Get data for previous post
    data.previous = postIndex === 0 ? posts[posts.length - 1] : posts[postIndex - 1];

    // Get data for next post
    data.next = postIndex === posts.length - 1 ? posts[0] : posts[postIndex + 1];

    return data;
}

export async function searchPosts(query) {
    const index = new Index({});
    const posts = await getPosts();

    posts.forEach((post) => {
        index.add(post.slug, post.frontmatter.title);
    });

    const results = index.search(query);
    const matchedPosts = posts.filter((post) => {
        return results.includes(post.slug);
    });

    return matchedPosts;
}
