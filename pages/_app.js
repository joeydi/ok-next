import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import Head from "next/head";
import Layout from "../components/layout";
import favicon from "../images/favicon.png";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}
