import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";

const navLiks = [
  "Why Bitly?",
  "Solutions",
  "Features",
  "Pricing",
  "Resources",
  "Log In",
  "Sign up Free",
];

// {blok.name}

const Feature = ({ blok }) => (
  <header className="column feature" {...sbEditable(blok)}>
    <Image
      src="https://docrdsfx76ssb.cloudfront.net/static/1642175923/pages/wp-content/uploads/2021/08/bitly_logo.svg"
      alt="logo"
      width={100}
      height={50}
      className="logo"
    />
    <nav>
      <ul>
        {navLiks.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
    <button>Get a Quote</button>
  </header>
);

export default Feature;
