import { useState } from "react";
import Link from "next/link";

import Logo from "@/images/logo.svg";
import Hamburger from "@/icons/hamburger.svg";

export default function Header() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const hideNav = () => {
        setNavActive(false);
    };

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <Link href="/">
                            <a title="Okay Plus logo">
                                <Logo />
                            </a>
                        </Link>
                    </div>
                    <div className="col-6 d-md-none">
                        <button id="menu-trigger" onClick={toggleNav}>
                            <Hamburger width="30" height="30" />
                            <span className="visually-hidden">{navActive ? "Hide Menu" : "Show Menu"}</span>
                        </button>
                    </div>
                    <nav className={`col-12 col-md-9 ${navActive ? "active" : ""}`}>
                        <ul id="menu">
                            <li>
                                <Link href="/services/" onClick={hideNav} legacyBehavior={false}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/work/" onClick={hideNav} legacyBehavior={false}>
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog/" onClick={hideNav} legacyBehavior={false}>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact/" onClick={hideNav} legacyBehavior={false}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
