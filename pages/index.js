import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/future/image";

import ChevronRight from "@/icons/chevron-right.svg";

import Clock from "@/components/clock.js";
import Testimonial from "@/components/testimonial.js";

import phone from "@/images/phone-upscaled.png";
import tony from "@/images/testimonials/tony.jpg";
import kathleen from "@/images/testimonials/kathleen.jpg";
import jeremy from "@/images/testimonials/jeremy.jpg";
import tom from "@/images/testimonials/tom.jpg";
import doron from "@/images/testimonials/doron.jpg";

const testimonials = [
    {
        photo: tony,
        name: "Tony Ash",
        title: "Chief Technical Officer",
        company: "Earth911",
        url: "http://earth911.com/",
        testimonial: "Joe is one of the few software developers I’ve met who is also a very capable designer. This blend of skills enabled him to tackle a wide range of issues across a variety of projects.  Joe led the development of a consumer facing geolocation app used by Fortune 50 companies and worked on diverse variety of projects such as adding methods to our API, designing custom graphics for the editorial team, and creating prototypes for new mobile applications.  Joe’s technical prowess combined with his solid communication skills made him an indispensable member of my team.",
    },
    {
        photo: kathleen,
        name: "Kathleen Orazio",
        title: "Senior Project Director",
        company: "Park&Co",
        url: "http://parkandco.com",
        testimonial: "Joe is an extremely skilled web designer, developer and digital problem solver. For many of our online projects, he’s been an instrumental part of our process including planning, assessing and developing. Joe’s also responsive, diligent, detailed and is a strong communicator. He brings creativity, logic and integrity to each of his efforts and we appreciate and strongly recommend his talents.",
    },
    {
        photo: jeremy,
        name: "Jeremy Aldrich",
        title: "Senior Software Architect",
        company: "Norse",
        url: "http://norse-corp.com/",
        testimonial: "Joe has a rare combination of being great at both design and development. He designed and developed, in a short amount of time, a geolocation search application that could be customized by third parties in a framework he had little previous experience in.",
    },
    {
        photo: tom,
        name: "Tom Bachman, AIA",
        title: "Principal Architect",
        company: "GBA",
        url: "http://gbarchitecture.com/",
        testimonial: "Working with Okay Plus has been a pleasure and the results are fantastic. Joe created our website 10 years ago, and when it came time to update it, he was who we turned to. He listened to what we wanted and worked with us to refine the design. In the end he was able to produce a custom designed website that looks great and is easy to manage.",
    },
    {
        photo: doron,
        name: "Doron Krinetz",
        title: "President",
        company: "Graphique Creative",
        url: "http://www.graphique-us.com/",
        testimonial: "I have been in business for 14 years and it is rare that I meet a freelancer that not only knows their stuff, but can do it with such speed and ease. Thank you so much.",
    },
];

export default function Home() {
    const [heroActive, setHeroActive] = useState(false);

    useEffect(() => {
        setHeroActive(true);
    }, []);

    return (
        <div className="home">
            <div id="hero" className={`home ${heroActive ? "active" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Okay Plus is the web design studio of Joe di Stefano</h1>
                            <p>Critical thinking, clean code and responsive design. These are the tools I use to bring digital experiences to life online.</p>
                            <Link href="/work">
                                <a className="btn">
                                    View My Work
                                    <ChevronRight className="icon ms-10" />
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="btn">
                                    Get In Touch
                                    <ChevronRight className="icon ms-10" />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-7">
                            <Image priority="true" id="phone" {...phone} alt="Mobile device showing custom website design." />
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <Clock />
                <div className="container">
                    <h2>I partner with brands and agencies, bringing over 10 years of design and development experience to the table.</h2>

                    <div className="testimonials">
                        {testimonials.map((testimonial, i) => {
                            return <Testimonial testimonial={testimonial} key={i} />;
                        })}
                    </div>
                </div>
            </div>

            <div id="cta">
                <div className="container">
                    <h3>
                        Have a project in mind?
                        <br />
                        <Link href="/services">
                            <a className="btn">
                                See My Services
                                <ChevronRight className="icon ms-10" />
                            </a>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
