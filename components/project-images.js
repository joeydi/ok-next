// import Masonry from "masonry-layout";

export default function ProjectImages() {
    const projectImages = useRef();

    useEffect(() => {
        console.log("Masonry:", Masonry);

        if (typeof window === "undefined") {
            return;
        }

        // var grid = document.querySelector(".grid");
        var masonry = new Masonry(projectImages.current, {
            itemSelector: "div",
            layoutMode: "masonry",
        });
    }, []);

    return (
        <div className="project-images row" ref={projectImages}>
            {images &&
                images.map((image, i) => {
                    return (
                        <div className={`col-sm-6 ${images.length > 2 ? "col-lg-4" : ""}`} key={i}>
                            <a href={image.attributes.url}>
                                <img src={image.attributes.url} alt="" />
                            </a>
                        </div>
                    );
                })}
        </div>
    );
}
