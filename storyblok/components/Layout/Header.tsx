import type { NextPage } from "next";
import type { LayoutStoryblok } from "storyblok";
import Image from "next/image";
import Link from "next/link";
import SbEditable from "storyblok-react";
import { sbEditable } from "@storyblok/storyblok-editable";

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
            <li key={item._uid}>
              <Link href="#">{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
