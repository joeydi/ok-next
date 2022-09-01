import logo from "../images/logo.svg";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <a id="logo" className="col-xs-6 col-sm-3" href="/">
                        <img src={logo.src} alt="Okay Plus / Design &amp; Technology" />
                    </a>
                    <a id="menu-trigger" className="col-xs-6 visible-xs">
                        <i className="icon-list"></i>
                    </a>
                    <nav className="col-xs-12 col-sm-9">
                        <ul id="menu">
                            <li>
                                <a href="/services/">Services</a>
                            </li>
                            <li>
                                <a href="/work/">Work</a>
                            </li>
                            {/* <li>
                                <a href="/blog/">Blog</a>
                            </li> */}
                            <li>
                                <a href="/contact/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
