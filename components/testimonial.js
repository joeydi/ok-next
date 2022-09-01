import { useInView } from "react-intersection-observer";

export default function Testimonial({ testimonial }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <div className={`testimonial ${inView ? "active" : ""}`} ref={ref}>
            <cite>
                <img src={testimonial.photo.src} width="80" height="80" alt="" />
                <div className="name">
                    {testimonial.name} {`${inView}`}
                </div>
                <div className="title">{testimonial.title}</div>
            </cite>
            <blockquote>
                <p>{testimonial.testimonial}</p>
            </blockquote>
        </div>
    );
}
