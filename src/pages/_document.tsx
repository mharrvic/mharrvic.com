import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="Mhar Vic" content="Mhar Vic Chicano's Portfolio" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta property="og:type" content="website" />
          <meta content="summary" name="twitter:card" />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            rel="icon"
            href={require("../assets/img/favicon.png")}
            type="image/png"
            sizes="16x16"
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
