const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");
const yaml = require("js-yaml");

const dir = process.argv[2];
const files = fs.readdirSync(dir);
const imageInfo = files.map((fileName) => {
    const filePath = path.join(dir, fileName);
    const dimensions = sizeOf(path.join(dir, fileName));

    return {
        src: filePath,
        alt: fileName.replace(".jpg", "").replace(".png", "").replaceAll("-", " ").replaceAll("_", " "),
        width: dimensions.width,
        height: dimensions.height,
    };
});

const yamlOptions = {
    lineWidth: -1,
};

console.log(yaml.dump(imageInfo, yamlOptions));
