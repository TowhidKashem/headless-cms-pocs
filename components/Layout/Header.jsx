import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";
import { sbEditable } from "@storyblok/storyblok-editable";

const Header = ({ blok }) => {
  const navItemsLeft = blok.body[0].header_nav_item;
  const navItemsRight = blok.body[1].header_nav_item;

  return (
    <div className="relative bg-white" {...sbEditable(blok)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <a href="#">
            <Image
              className="h-8 w-auto sm:h-10"
              src="https://docrdsfx76ssb.cloudfront.net/static/1642175923/pages/wp-content/uploads/2021/08/bitly_logo.svg"
              alt=""
              width={100}
              height={50}
            />
          </a>

          <div className="relative">
            {navItemsLeft.map((navItemLeft) => (
              <NavItem key={navItemLeft._uid} blok={navItemLeft} />
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {navItemsRight.map((navItemsRight) => (
              <NavItem key={navItemsRight._uid} blok={navItemsRight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
