import Link from "next/link";

import logo from "../images/logo.svg";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-3">
                        <Link href="/">
                            <a>
                                <img src={logo.src} alt="Okay Plus / Design &amp; Technology" />
                            </a>
                        </Link>
                    </div>
                    <a id="menu-trigger" className="col-xs-6 visible-xs">
                        <i className="icon-list"></i>
                    </a>
                    <nav className="col-xs-12 col-sm-9">
                        <ul id="menu">
                            <li>
                                <Link href="/services/">Services</Link>
                            </li>
                            <li>
                                <Link href="/work/">Work</Link>
                            </li>
                            {/* <li>
                                <Link href="/blog/">Blog</Link>
                            </li> */}
                            <li>
                                <Link href="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
