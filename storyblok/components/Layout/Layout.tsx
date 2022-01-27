import type { NextPage } from "next";
import type { LayoutStoryblok } from "storyblok.types";
import Head from "next/head";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

const Layout: NextPage<{ story: LayoutStoryblok }> = ({ story, children }) => {
  const { header, footer } = story.content;

  return (
    <>
      <Head>
        <title>This is the default global meta title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bitly">
        <Header bloks={header} />

        <main className="content">{children}</main>

        <Footer bloks={footer} />
      </div>
    </>
  );
};

export default Layout;
