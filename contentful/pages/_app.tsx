import type { AppProps } from "next/app";
import { client } from "@lib/contentful";
import Layout from "@components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("headerNav", pageProps.headerNav);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "headerNav",
  });

  return {
    props: {
      headerNav: res.items,
    },
  };
}

export default MyApp;
