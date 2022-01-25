import type { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return (
    <div className="bitly">
      <header>hello world</header>
      <main>{children}</main>
      <footer>goodbye world</footer>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      CONTENTFUL_SPACE_TOKEN: process.env.CONTENTFUL_SPACE_TOKEN,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  };
}

export default Layout;
