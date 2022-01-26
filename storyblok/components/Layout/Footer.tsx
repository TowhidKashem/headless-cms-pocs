import type { NextPage } from "next";
import type { LayoutStoryblok } from "storyblok";
import Image from "next/image";
import List from "@components/List";

const Footer: NextPage<{ bloks: LayoutStoryblok["footer"] }> = ({
  bloks = [],
}) => {
  const lists = bloks.filter(({ component }) => component === "list");

  return (
    <footer className="footer content-center">
      <nav>
        {lists.map((blok) => (
          <List key={blok._uid} blok={blok} />
        ))}
      </nav>
      <div>
        <Image
          src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
          width={85}
          height={40}
          alt=""
        />
        <p>
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
          {new Date().getFullYear()} Bitly
        </p>
      </div>
    </footer>
  );
};

export default Footer;
