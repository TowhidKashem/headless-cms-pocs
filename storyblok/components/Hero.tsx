import type { NextPage } from "next";
import type { HeroStoryblok } from "storyblok.types";
import SbEditable from "storyblok-react";

const Hero: NextPage<{ blok: HeroStoryblok }> = ({ blok }) => {
  const { headline, description, button_label } = blok;

  return (
    <SbEditable content={blok}>
      <section className="hero px-10 py-24 mb-10 content-center">
        <h2 className="font-bold text-6xl mb-5">{headline}</h2>
        <p className="text-2xl text-gray-500 mb-10 w-6/12">{description}</p>
        <button className="btn text-xl font-normal py-4 px-8 mb-3">
          {button_label}
        </button>
      </section>
    </SbEditable>
  );
};

export default Hero;
