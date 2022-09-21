import fs from "fs";
import path from "path";

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

export function getProject(slug) {
    const data = fs.readFileSync(path.join("content", "projects", `${slug}.mdx`));

    return data;
}
