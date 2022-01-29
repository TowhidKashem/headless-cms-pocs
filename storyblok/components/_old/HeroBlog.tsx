import type { NextPage } from 'next';
import type { HeroStoryblok } from 'storyblok.types';
import Image from 'next/image';
import SbEditable from 'storyblok-react';

const HeroBlog: NextPage<{ blok: HeroStoryblok }> = ({ blok }) => {
  const { headline, description, image, button_text, button_url, tag_name } =
    blok;

  return (
    <SbEditable content={blok}>
      <section className="hero-blog px-10 py-24 mb-10 content-center">
        <section className="left">
          <Image src={image.filename} alt="" width={490} height={275} />
        </section>
        <section className="right">
          <span className="font-bold text-sm text-gray-500">{tag_name}</span>
          <h2 className="font-bold text-3xl mb-5">{headline}</h2>
          <p className="text-1xl text-gray-500 mb-5">{description}</p>
          <a
            href={button_url}
            className="btn text-xl font-normal py-4 px-8 mb-3"
          >
            {button_text}
          </a>
        </section>
      </section>
    </SbEditable>
  );
};

export default HeroBlog;
