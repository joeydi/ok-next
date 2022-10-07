import sample from "underscore/modules/sample.js";
import random from "underscore/modules/random.js";
import { NextSeo } from "next-seo";
import useDefaultSeo from "@/hooks/default-seo";
import data from "./data.json";

export default function TwitterBio({ bio }) {
    const seo = useDefaultSeo({
        title: "Your New Twitter Bio",
    });

    return (
        <div className="blog">
            <NextSeo {...seo} />
            <div id="hero">
                <div className="container">
                    <div className="row">
                        <h1 className="col-lg-10">Your New Twitter Bio</h1>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <h2>{bio}</h2>
                            <hr />
                            <p>This is an implementation of Merlin Mann&rsquo;s formula for Twitter profile descriptions, the inspiration for which is below. I thought it would be fun to bring it to life, so I scraped together a variety of sources to populate the different values, and wrote a little script to piece them together randomly.</p>
                            <blockquote>
                                <p>
                                    function twitterbio {"{"} echo $realJob, $aspirationalJob, $familyTitle, and $whackadoodleHobby. $techGerund since $yearStarted. {"}"}
                                </p>
                                <p>
                                    — Merlin Mann (@hotdogsladies) <br />
                                    <a href="https://twitter.com/hotdogsladies/statuses/165906670797594624">February 4, 2012</a>
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const { realJobs, aspirationalJobs, whackadoodleHobbies, familyTitles, techGerunds } = data;
    const year = new Date().getFullYear() - random(10);
    const bio = `${sample(realJobs)}, ${sample(aspirationalJobs)}, ${sample(familyTitles)}, and ${sample(whackadoodleHobbies)}. ${sample(techGerunds)} since ${year}.`;

    return { props: { bio } };
}
