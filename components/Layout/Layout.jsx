import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bitly">
      <Head>
        <title>
          URL Shortener - Short URLs & Custom Free Link Shortener | Bitly
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="center">{children}</section>

      <section style={{ background: "#0b1736" }}>
        <section className="center text-center py-8">
          <h2 className="font-semibold text-3xl text-white mb-5">
            More than a link shortener
          </h2>
          <button className="btn">Get Started for Free</button>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
