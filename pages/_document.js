import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="js csstransforms">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="ahrefs-site-verification" content="8f079fd255d0ccbffee41b07433110f750f28a6b3feb8e53b188391f01c610da" />
                    <link href="https://use.typekit.net/vrn4dxs.css" rel="stylesheet" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0JZ5MS13QQ"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', 'G-0JZ5MS13QQ');`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
