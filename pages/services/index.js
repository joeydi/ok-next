import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";

import ChevronRight from "@/icons/chevron-right.svg";

import html5 from "@/images/logos/html5.svg";
import html5Size from "@/images/logos/html5.svg?size";
import css3 from "@/images/logos/css3.svg";
import css3Size from "@/images/logos/css3.svg?size";
import wordpress from "@/images/logos/wordpress.svg";
import wordpressSize from "@/images/logos/wordpress.svg?size";
import drupal from "@/images/logos/drupal.svg";
import drupalSize from "@/images/logos/drupal.svg?size";
import python from "@/images/logos/python.svg";
import pythonSize from "@/images/logos/python.svg?size";
import django from "@/images/logos/django.svg";
import djangoSize from "@/images/logos/django.svg?size";
import php from "@/images/logos/php.svg";
import phpSize from "@/images/logos/php.svg?size";

export default function Services() {
    const seo = useDefaultSeo({
        title: "Web Design & Development Services",
    });

    return (
        <div className="services">
            <NextSeo {...seo} />
            <div id="rwd" className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <h1>Responsive Web Design</h1>
                            <h2>Design and development that respond to users&rsquo; behavior and environment based on screen size, platform and orientation.</h2>
                            <p>Your audience is increasingly going mobile. Make sure you are putting your best foot forward in all situations.</p>
                            <ul>
                                <li>
                                    <a href="http://www.w3.org/TR/html5/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="HTML5" src={html5} width={(html5Size.width / html5Size.height) * 60} height={60} />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="CSS3" src={css3} width={(css3Size.width / css3Size.height) * 60} height={60} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                                        Bootstrap
                                    </a>
                                </li>
                                <li>
                                    <a href="https://get.foundation/" target="_blank" rel="noopener noreferrer">
                                        Foundation
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cms" className="service">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-5 ps-4 ps-lg-0">
                            <h1>Content Management Systems</h1>
                            <h2>Custom interfaces for managing everything from marketing websites to editorial content and geodata. All built on battle-tested, open-source software.</h2>
                            <p>We build themes and plugins with extensibility and maintainabilty in mind, ensuring that your project will be flexible and powerful enough serve your business well into the future.</p>
                            <ul>
                                <li>
                                    <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="WordPress" src={wordpress} width={(wordpressSize.width / wordpressSize.height) * 40} height={40} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="Drupal" src={drupal} width={(drupalSize.width / drupalSize.height) * 34} height={34} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="app" className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6">
                            <h1>Web Application Development &amp; APIs</h1>
                            <h2>Need something custom? Building a product or starting an online business?</h2>
                            <p>From location-based search APIs to web-based tools for data management and anaylsis, I have experience building software solutions for startups, publicly-traded companies, and government agencies alike.</p>
                            <ul>
                                <li>
                                    <a className="mt-5" href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="Python" src={python} width={(pythonSize.width / pythonSize.height) * 50} height={50} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="Django" src={django} width={(djangoSize.width / djangoSize.height) * 40} height={40} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                                        <Image alt="PHP" src={php} width={(phpSize.width / phpSize.height) * 45} height={45} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cta">
                <div className="container">
                    <h3>
                        Think I&rsquo;ve got what you need?
                        <br />
                        <Link href="/work">
                            <a className="btn">
                                View My Work
                                <ChevronRight className="icon ms-10" />
                            </a>
                        </Link>
                        <span className="or">or</span>
                        <Link href="/contact">
                            <a className="btn">
                                Get In Touch
                                <ChevronRight className="icon ms-10" />
                            </a>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
