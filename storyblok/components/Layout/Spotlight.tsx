import type { NextPage } from 'next';
import type { ButtonStoryblok, TextStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';
import Link from '@components/Link';

const Spotlight: NextPage<{
  cta_header?: TextStoryblok;
  cta_button?: ButtonStoryblok;
  isBlog: boolean;
}> = ({ cta_header, cta_button }) => {
  const { url, text } = cta_button;
  return (
    <section className="center text-center py-16">
      <h2 className="font-semibold text-3xl text-white mb-5">
        <SbEditable content={cta_header}>
          <span>{cta_header.text}</span>
        </SbEditable>
      </h2>
      <SbEditable content={cta_button}>
        <Link href={url} className="btn">
          {text}
        </Link>
      </SbEditable>
    </section>
  );
};

export default Spotlight;
