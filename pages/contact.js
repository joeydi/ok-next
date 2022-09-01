import headshot from "../images/headshot.jpg";

export default function Contact() {
    return (
        <div className="contact">
            <div id="hero">
                <div className="container">
                    <div className="row">
                        {/* <h1 className="confirmation col-sm-12">Thanks for contacting us! We'll get back to you shortly.</h1> */}

                        <div className="col-sm-6 col-md-5 col-md-offset-1">
                            <img className="headshot" src={headshot.src} />
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <h1>Available for New Projects</h1>
                                <p>
                                    <strong>Joe di Stefano</strong>
                                    <br />
                                    <a href="tel:4804596720">480.459.6720</a>
                                    <br />
                                    <a href="mailto:joeydi@okaypl.us">joeydi@okaypl.us</a>
                                </p>
                                <div className="footer">
                                    <a href="<?php the_field( 'vcard', 'options' ); ?>">
                                        <span className="glyphicon glyphicon-save"></span> Download vCard
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="map">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-6">
                            <div className="card">
                                <h2>Send Mail To:</h2>
                                <p>
                                    <strong>Okay Plus</strong>
                                    <br />
                                    47 Maple St, Suite 220
                                    <br />
                                    Burlington, VT 05401
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-5 col-md-offset-1 col-lg-4">
                            <h2>Get In Touch</h2>
                            <p>Looking to hire me? Have a question? Just want to chat? Send me a note through this form and I'll get back to you as soon as possible. If you are interested in working together, send along as much info about your project as possible.</p>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-offset-1">
                            <form role="form" method="post" action="<?php the_permalink(); ?>">
                                <div className="form-group">
                                    <label htmlFor="fullname">Your Name</label>
                                    <input type="text" className="form-control" id="fullname" name="fullname" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="5"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-default">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
