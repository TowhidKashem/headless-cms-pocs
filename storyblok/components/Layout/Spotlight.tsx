import type { NextPage } from 'next';
import classNames from 'classnames';
import type {
  ButtonStoryblok,
  TextStoryblok,
  TextAreaStoryblok
} from 'storyblok.types';
import SbEditable from 'storyblok-react';
import Link from '@components/Link';

const Spotlight: NextPage<{
  readonly cta_header?: TextStoryblok;
  readonly cta_button?: ButtonStoryblok;
  readonly newsletter_title: TextStoryblok;
  readonly newsletter_description: TextAreaStoryblok;
  readonly newsletter_tos: TextAreaStoryblok;
  readonly about_title: TextStoryblok;
  readonly about_description: TextAreaStoryblok;
  readonly isBlog: boolean;
}> = ({
  cta_header,
  cta_button,
  newsletter_title,
  newsletter_description,
  newsletter_tos,
  about_title,
  about_description,
  isBlog
}) => {
  return (
    <section
      className={classNames('spotlight', 'center', 'text-center', 'py-16', {
        blog: isBlog
      })}
    >
      <section className="content-center">
        {isBlog ? (
          <>
            <section className="about">
              <SbEditable content={about_title}>
                <h3 className="font-bold text-2xl mb-3">{about_title.text}</h3>
              </SbEditable>
              <SbEditable content={about_description}>
                <p>{about_description.text_area}</p>
              </SbEditable>
            </section>
            <section className="newsletter">
              <SbEditable content={newsletter_title}>
                <h3 className="font-bold text-2xl mb-3">
                  {newsletter_title.text}
                </h3>
              </SbEditable>
              <SbEditable content={newsletter_description}>
                <p>{newsletter_description.text_area}</p>
              </SbEditable>
              <form>
                <label>Email Address</label>
                <input type="email" />
                <button type="submit" className="btn">
                  Sign Up
                </button>
                <SbEditable content={newsletter_tos}>
                  <p>{newsletter_tos.text_area}</p>
                </SbEditable>
              </form>
            </section>
          </>
        ) : (
          <>
            <h2 className="font-semibold text-3xl text-white mb-5">
              <SbEditable content={cta_header}>
                <span>{cta_header.text}</span>
              </SbEditable>
            </h2>
            <SbEditable content={cta_button}>
              <Link href={cta_button.url} className="btn">
                {cta_button.text}
              </Link>
            </SbEditable>
          </>
        )}
      </section>
    </section>
  );
};

export default Spotlight;
