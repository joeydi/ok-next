import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="ahrefs-site-verification" content="8f079fd255d0ccbffee41b07433110f750f28a6b3feb8e53b188391f01c610da" />
                    <link href="https://use.typekit.net/vrn4dxs.css" rel="stylesheet" />
                    <meta name="description" content="Critical thinking, clean code and responsive design. These are the tools I use to bring digital experiences to life online." />
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
