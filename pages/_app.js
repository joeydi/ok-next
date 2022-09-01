import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
