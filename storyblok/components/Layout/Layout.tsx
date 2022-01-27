import type { NextPage } from 'next';
import type { LayoutStoryblok } from 'storyblok.types';
import Head from 'next/head';
import Header from '@components/Layout/Header';
import BottomCTA from '@components/Layout/BottomCTA';
import Footer from '@components/Layout/Footer';

const Layout: NextPage<{ story: LayoutStoryblok; isPreview: boolean }> = ({
  story,
  isPreview,
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
        <title>This is the default global meta title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bitly">
        <Header
          header_nav_left_links={header_nav_left_links}
          header_nav_right_links={header_nav_right_links}
        />

        <main className="content">{children}</main>

        <BottomCTA cta_header={cta_header} cta_button={cta_button[0]} />

        <Footer
          footer_lists={footer_lists}
          footer_copyright_text={footer_copyright_text}
        />
      </div>
    </>
  );
};

export default Layout;
