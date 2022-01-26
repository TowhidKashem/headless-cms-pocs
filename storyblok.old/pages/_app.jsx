import Script from "next/script";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </Layout>
  );
}
