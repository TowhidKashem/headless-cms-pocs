import type { NextPage } from 'next';
import type { ButtonStoryblok } from 'storyblok.types';

const BottomCTA: NextPage<{
  cta_header: string;
  cta_button: ButtonStoryblok;
}> = ({ cta_header, cta_button }) => {
  const { link, text } = cta_button;
  return (
    <section style={{ background: '#0b1736' }}>
      <section className="center text-center py-16">
        <h2 className="font-semibold text-3xl text-white mb-5">{cta_header}</h2>
        <a href={link} className="btn">
          {text}
        </a>
      </section>
    </section>
  );
};

export default BottomCTA;
