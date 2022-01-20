import React from "react";
import Image from "next/image";
import NavItem from "./NavItem";

const navLiksLeft = [
  "Why Bitly?",
  "Solutions",
  "Features",
  "Pricing",
  "Resources",
];

const Header = () => {
  return (
    <div className="relative bg-white">
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
            {navLiksLeft.map((navLink) => (
              <NavItem key={navLink} text={navLink} />
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mx-4"
            >
              Log In
            </a>
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 mx-4"
            >
              Sign up Free
            </a>
            <button className="btn">Get a Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
