import { useState } from "react";
import Link from "next/link";

import logo from "@/images/logo.svg";

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
                            <a>
                                <img src={logo.src} alt="Okay Plus / Design &amp; Technology" />
                            </a>
                        </Link>
                    </div>
                    <div className="col-6 d-md-none">
                        <button id="menu-trigger" onClick={toggleNav}>
                            <i className="icon-list"></i>
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
