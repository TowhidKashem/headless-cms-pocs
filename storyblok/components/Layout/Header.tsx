import type { NextPage } from "next";
import type { LayoutStoryblok } from "storyblok.types";
import SbEditable from "storyblok-react";
import Image from "next/image";
import Link from "next/link";

const Header: NextPage<{ bloks: LayoutStoryblok["header"] }> = ({
  bloks = [],
}) => {
  const { header_nav_item } = bloks.filter(
    ({ component }) => component === "header_nav"
  )[0];

  return (
    <header className="header content-center">
      <Image
        src="https://docrdsfx76ssb.cloudfront.net/static/1642780665/pages/wp-content/uploads/2021/08/bitly_logo.svg"
        width={100}
        height={105}
        className="logo"
        alt=""
      />
      <nav>
        <ul>
          {header_nav_item.map((item) => (
            <SbEditable key={item._uid} content={item}>
              <li>
                <Link href="#">{item.text}</Link>
              </li>
            </SbEditable>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
