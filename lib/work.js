import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

export function getProjectPaths() {
    let files = fs.readdirSync(path.join("content", "projects"));

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

export async function getProjects() {
    let files = fs.readdirSync(path.join("content", "projects"));

    // Remove drafts
    files = files.filter((file) => file.indexOf("_") !== 0);

    // Parse MDX for each project
    let projects = await Promise.all(
        files.map(async (fileName) => {
            const source = fs.readFileSync(path.join("content", "projects", fileName));
            const project = await serialize(source, { parseFrontmatter: true });

            project.slug = fileName.replace(".mdx", "");
            return project;
        })
    );

    return projects;
}

export async function getProjectData(slug) {
    const data = {};
    const projects = await getProjects();
    const projectIndex = projects.findIndex((project) => project.slug === slug);

    // Get data for main project
    data.project = projects[projectIndex];

    // Get data for previous project
    data.previous = projectIndex === 0 ? projects[projects.length - 1] : projects[projectIndex - 1];

    // Get data for next project
    data.next = projectIndex === projects.length - 1 ? projects[0] : projects[projectIndex + 1];

    return data;
}
