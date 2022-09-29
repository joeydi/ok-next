import Head from "next/head";
import data from './data.json';

export default function TwitterBio() {
    console.log(data);

    return (
        <div className="blog">
            <Head>
                <title key="title">Blog - Okay Plus</title>
            </Head>
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <h1 className="col-lg-10">
                            Your New Twitter Bio
                        </h1>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            Testing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
