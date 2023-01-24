import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
//import Head from "next/head";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="me" href="https://noc.social/@4mobeers" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            href="https://storageapi.fleek.one/ead18a13-670a-4701-91a7-06a767c3dcd5-bucket/assets/img/logo-4mobeers.svg"
          />
        </Head>
        <body className="lightmode dark:darkmode">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
