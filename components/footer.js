import Twitter from "@/icons/twitter.svg";
import Facebook from "@/icons/facebook.svg";
import LinkedIn from "@/icons/linkedin.svg";
import Dribbble from "@/icons/dribbble.svg";
import GitHub from "@/icons/github.svg";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <p>
                            <strong>Web Application Design &amp; Development</strong>
                            <br />
                            from beautiful Burlington, VT
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <p>
                            <a href="mailto:joeydi@okaypl.us">joeydi@okaypl.us</a>
                            <br />
                            <a href="tel:14804596720">480.459.6720</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div id="copyright" className="col-sm-8">
                        <p>&copy; 2022 Okay Plus, 47 Maple St, Suite 220, Burlington, VT 05401</p>
                    </div>
                    <div id="social" className="col-sm-4">
                        <a href="https://twitter.com/joeydi" target="_blank" rel="noopener noreferrer">
                            <span className="visually-hidden">Twitter</span>
                            <Twitter width="36" height="36" />
                        </a>
                        <a href="https://www.facebook.com/okayplusdesign" target="_blank" rel="noopener noreferrer">
                            <span className="visually-hidden">Facebook</span>
                            <Facebook width="36" height="36" />
                        </a>
                        <a href="http://www.linkedin.com/in/joeydi" target="_blank" rel="noopener noreferrer">
                            <span className="visually-hidden">LinkedIn</span>
                            <LinkedIn width="36" height="36" />
                        </a>
                        <a href="http://dribbble.com/joeydi" target="_blank" rel="noopener noreferrer">
                            <span className="visually-hidden">Dribbble</span>
                            <Dribbble width="36" height="36" />
                        </a>
                        <a href="https://github.com/joeydi" target="_blank" rel="noopener noreferrer">
                            <span className="visually-hidden">GitHub</span>
                            <GitHub width="36" height="36" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
