export default function Work() {
    return (
        <div className="work">
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <h1 className="col-lg-10">
                            Jack of all trades? Sure.
                            <br />
                            Master of none? You be the judge.
                        </h1>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <a href="<?php the_permalink(); ?>" className="project-excerpt">
                                <img src="https://picsum.photos/640/448" alt="" />
                                <h2>Project Name</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
