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

        <section style={{ background: "#0b1736" }}>
          <section className="center text-center py-16">
            <h2 className="font-semibold text-3xl text-white mb-5">
              More than a link shortener
            </h2>
            <button className="btn">Get Started for Free</button>
          </section>
        </section>

        <Footer bloks={footer} />
      </div>
    </>
  );
};

export default Layout;
