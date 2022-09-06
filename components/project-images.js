import { useRef, useEffect } from "react";
import Masonry from "masonry-layout";

export default function ProjectImages({ images }) {
    const projectImages = useRef();

    useEffect(() => {
        var msnry = new Masonry(projectImages.current);
    }, []);

    return (
        <div className="project-images row" ref={projectImages}>
            {images &&
                images.map((image, i) => {
                    console.log(image);
                    return (
                        <div className={`col-sm-6 ${images.length > 2 ? "col-lg-4" : ""}`} key={i}>
                            <a href={image.attributes.url}>
                                <picture className="aspect" style={{ paddingTop: `${(image.attributes.height / image.attributes.width) * 100}%` }}>
                                    <img src={image.attributes.url} alt="" />
                                </picture>
                            </a>
                        </div>
                    );
                })}
        </div>
    );
}
