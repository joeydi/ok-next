import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export function getPostPaths() {
    let files = fs.readdirSync(path.join("content", "posts"));

    // Remove drafts
    files = files.filter((file) => file.indexOf("_") !== 0);

    return files.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(".mdx", ""),
            },
        };
    });
}

export async function getPosts() {
    let files = fs.readdirSync(path.join("content", "posts"));

    // Remove drafts
    files = files.filter((file) => file.indexOf("_") !== 0);

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

    // Just get the first 20 for now
    // posts = posts.slice(0, 100);

    return posts;
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
