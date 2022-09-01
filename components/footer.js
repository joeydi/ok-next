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
                        <p>
                            <a className="icon-twitter" href="https://twitter.com/joeydi">
                                Twitter
                            </a>
                            <a className="icon-facebook" href="https://www.facebook.com/okayplusdesign">
                                Facebook
                            </a>
                            <a className="icon-linkedin" href="http://www.linkedin.com/in/joeydi">
                                LinkedIn
                            </a>
                            <a className="icon-dribbble" href="http://dribbble.com/joeydi">
                                Dribbble
                            </a>
                            <a className="icon-github" href="https://github.com/joeydi">
                                Github
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
