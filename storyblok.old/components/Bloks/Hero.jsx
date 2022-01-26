import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Hero = ({ blok }) => {
  const { headline, description, button_label, quote_label } = blok;

  return (
    <section className="hero px-10 py-24 mb-10" {...sbEditable(blok)}>
      <h2 className="font-bold text-6xl mb-5">{headline}</h2>
      <p className="text-2xl text-gray-500 mb-10 w-6/12">{description}</p>
      <div className="text-center inline-block">
        <button className="btn text-xl font-normal py-4 px-8 mb-3">
          {button_label}
        </button>
        <a href="#" className="block">
          {quote_label}
        </a>
      </div>
    </section>
  );
};

export default Hero;
