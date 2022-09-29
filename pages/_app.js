import "@/styles/main.scss";

import Head from "next/head";
import { DefaultSeo } from "next-seo";
import Layout from "@/components/layout";

import favicon from "@/images/favicon.png";
import social from "@/images/okay-plus-social.png";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
            </Head>
            <DefaultSeo
                type="website"
                url="https://okaypl.us/"
                title="Web Design &amp; Development from Burlington, VT"
                titleTemplate="%s - Okay Plus"
                description="Critical thinking, clean code and responsive design. These are the tools I use to bring digital experiences to life online."
                openGraph={{
                    type: "website",
                    locale: "en_IE",
                    url: "https://okaypl.us/",
                    site_name: "Okay Plus",
                    images: [{ url: social.src, alt: "Okay Plus logo with mobile device in foreground showing custom website design." }],
                }}
                twitter={{
                    handle: "@joeydi",
                    cardType: "summary_large_image",
                }}
            />
            <Component {...pageProps} />
        </Layout>
    );
}
