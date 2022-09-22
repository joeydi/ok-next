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

    const projects = await Promise.all(
        files.map(async (fileName) => {
            const source = fs.readFileSync(path.join("content", "projects", fileName));
            const project = await serialize(source, { parseFrontmatter: true });

            return project;
        })
    );

    return projects;
}

export function getProject(slug) {
    const data = fs.readFileSync(path.join("content", "projects", `${slug}.mdx`));

    return data;
}
