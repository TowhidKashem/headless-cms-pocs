import type { NextPage } from 'next';
import type { LayoutStoryblok } from 'storyblok.types';
import Head from 'next/head';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';

const LayoutBlog: NextPage<{ story: LayoutStoryblok }> = ({
  story,
  children
}) => {
  const {
    header_nav_left_links,
    header_nav_right_links,
    cta_header,
    cta_button,
    footer_lists,
    footer_copyright_text
  } = story.content;

  console.log('layout', story.content);

  return (
    <>
      <Head>
        <title>Bitly Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bitly-blog">
        <Header
          header_nav_left_links={header_nav_left_links}
          header_nav_right_links={header_nav_right_links}
        />

        <main className="content">{children}</main>

        <section className="bottom-cta">
          <section className="content-center">
            <header>About Bitly</header>
            <p>
              Bitly is the world's leading Link Management Platform. Businesses
              at every stage of their growth rely on our branded short links and
              powerful analytics to optimize their communication strategies.
            </p>
            <a href="/learn" className="btn">
              Learn more
            </a>
          </section>
        </section>

        <Footer
          footer_lists={footer_lists}
          footer_copyright_text={footer_copyright_text[0]}
        />
      </div>
    </>
  );
};

export default LayoutBlog;
