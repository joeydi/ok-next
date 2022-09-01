import Head from "next/head";
import Link from "next/link";

import html5 from "../images/logos/html5.png";
import css3 from "../images/logos/css3.png";
import wordpress from "../images/logos/wordpress.png";
import drupal from "../images/logos/drupal.png";
import python from "../images/logos/python.png";
import django from "../images/logos/django.png";
import php from "../images/logos/php.png";

export default function Services() {
    return (
        <div className="services">
            <Head>
                <title key="title">Web Design &amp; Development Services - Okay Plus</title>
            </Head>
            <div id="rwd" className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 col-lg-6">
                            <h1>Responsive Web Design</h1>
                            <h2>Design and development that respond to users&rsquo; behavior and environment based on screen size, platform and orientation.</h2>
                            <p>Your audience is increasingly going mobile. Make sure you are putting your best foot forward in all situations.</p>
                            <ul>
                                <li>
                                    <a href="http://www.w3.org/TR/html5/">
                                        <img alt="HTML5" src={html5.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.w3.org/Style/CSS/">
                                        <img alt="CSS3" src={css3.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://getbootstrap.com/">Bootstrap</a>
                                </li>
                                <li>
                                    <a href="http://foundation.zurb.com/">Foundation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="cms" className="service">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6 col-md-5 col-md-offset-7">
                            <h1>Content Management Systems</h1>
                            <h2>Custom interfaces for managing everything from marketing websites to editorial content and geodata. All built on battle-tested, open-source software.</h2>
                            <p>We build themes and plugins with extensibility and maintainabilty in mind, ensuring that your project will be flexible and powerful enough serve your business well into the future.</p>
                            <ul>
                                <li>
                                    <a href="http://wordpress.org/">
                                        <img alt="WordPress" src={wordpress.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://drupal.org/">
                                        <img alt="Drupal" src={drupal.src} />
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
                        <div className="col-sm-6">
                            <h1>Web Application Development &amp; APIs</h1>
                            <h2>Need something custom? Building a product or starting an online business?</h2>
                            <p>From location-based search APIs to web-based tools for data management and anaylsis, I have experience building software solutions for startups, publicly-traded companies, and government agencies alike.</p>
                            <ul>
                                <li>
                                    <a href="http://www.python.org/">
                                        <img alt="Python" src={python.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.djangoproject.com/">
                                        <img alt="Django" src={django.src} />
                                    </a>
                                </li>
                                <li>
                                    <a href="http://php.net/">
                                        <img alt="PHP" src={php.src} />
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
                        <Link href="/work" className="btn">
                            <span>
                                View My Work <span className="glyphicon glyphicon-chevron-right"></span>
                            </span>
                        </Link>
                        <span className="or">or</span>
                        <Link className="btn" href="/contact">
                            <span>
                                Get In Touch <span className="glyphicon glyphicon-chevron-right"></span>
                            </span>
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
}
