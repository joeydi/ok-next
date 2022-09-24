const qs = require("qs");
const fs = require("fs");
const path = require("path");
const axios = require("axios").default;
const yaml = require("js-yaml");

async function getMediaByID(id, fallbackAltText = "") {
    const endpoint = "https://okaypl.us/wp-json/wp/v2/media";
    const response = await axios(`${endpoint}/${id}`);

    // Handle response
    if (!response.status == 200) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }

    const media = response.data;

    return {
        src: media.source_url,
        alt: media.alt_text ? media.alt_text : fallbackAltText,
        width: media.media_details.width,
        height: media.media_details.height,
    };
}

async function getTagByID(id) {
    const endpoint = "https://okaypl.us/wp-json/wp/v2/tags";
    const response = await axios(`${endpoint}/${id}`);

    // Handle response
    if (!response.status == 200) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }

    const tag = response.data;

    return tag.name;
}

async function importPosts() {
    const endpoint = "https://okaypl.us/wp-json/wp/v2/posts";
    const params = {
        per_page: 100,
        page: 2,
    };
    const queryString = qs.stringify(params);
    const response = await axios(`${endpoint}${queryString ? `?${queryString}` : ""}`);

    // Handle response
    if (!response.status == 200) {
        console.error(response.statusText);
        throw new Error(`An error occured please try again`);
    }

    const posts = response.data;

    const postData = await Promise.all(
        posts.map(async (post) => {
            const tags = await Promise.all(post.tags.map(async (id) => getTagByID(id)));

            let data = {
                format: post.format,
                slug: post.slug,
                title: post.title.rendered,
                content: post.content.rendered,
                date: post.date,
                link: post.acf.link ?? post.acf.source,
                quote: post.acf.quote,
                video: post.acf.video,
                tags: tags,
            };

            if (post.featured_media) {
                data.featuredImage = await getMediaByID(post.featured_media, post.title.rendered);
            }

            return data;
        })
    );

    const yamlOptions = {
        lineWidth: -1,
    };

    postData.map((post) => {
        let frontmatter = { ...post };
        delete frontmatter.content;
        delete frontmatter.slug;
        delete frontmatter.quote;

        const postContent = post.quote ? `${post.content}\n${post.quote}` : post.content;

        const content = `---\n${yaml.dump(frontmatter, yamlOptions)}---\n\n${postContent}`;

        return fs.writeFile(path.join("content", "posts", `${post.slug}.mdx`), content, (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
}

importPosts();
