import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export function getProjectPaths() {
    const files = fs.readdirSync(path.join("content", "projects"));

    return files.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(".mdx", ""),
            },
        };
    });
}

export async function getProjects() {
    const files = fs.readdirSync(path.join("content", "projects"));

    // Parse MDX for each project
    let projects = await Promise.all(
        files.map(async (fileName) => {
            const source = fs.readFileSync(path.join("content", "projects", fileName));
            const project = await serialize(source, { parseFrontmatter: true });

            project.slug = fileName.replace(".mdx", "");
            return project;
        })
    );

    // Remove drafts
    projects = projects.filter((project) => project.frontmatter.status !== "draft");

    return projects;
}

export function getProject(slug) {
    const data = fs.readFileSync(path.join("content", "projects", `${slug}.mdx`));

    return data;
}
