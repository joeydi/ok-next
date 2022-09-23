import { useRef, useEffect } from "react";
import Image from "next/image";
import Masonry from "masonry-layout";

export default function ProjectImages({ images }) {
    const projectImages = useRef();

    useEffect(() => {
        new Masonry(projectImages.current);
    }, [images]);

    return (
        <div className="project-images row" ref={projectImages}>
            {images &&
                images.map((image, i) => {
                    return (
                        <div className={`col-12 col-sm-6 ${images.length > 2 ? "col-lg-4" : ""}`} key={i}>
                            <a href={image.src}>
                                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} layout="responsive" sizes="33vw, (max-width: 767px) 50vw, (max-width: 1199px) 100vw" />
                            </a>
                        </div>
                    );
                })}
        </div>
    );
}
