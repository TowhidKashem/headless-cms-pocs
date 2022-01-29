import type { NextPage } from 'next';
import Head from 'next/head';
import { objectToArray } from '@utils/array';
import { AlternateObject } from 'storyblok-js-client';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import Spotlight from '@components/Layout/Spotlight';

const Layout: NextPage<{
  readonly layout: {
    readonly navLinks: AlternateObject[];
  };
}> = ({ layout, children }) => {
  const { navLinks } = layout;

  return (
    <div className="bitly">
      <Head>
        <title>Bitly global title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navLinks={objectToArray(navLinks)} />

      <main className="content">{children}</main>

      {/* <Spotlight
        cta_header={cta_header[0]}
        cta_button={cta_button[0]}
        newsletter_title={newsletter_title[0]}
        newsletter_description={newsletter_description[0]}
        newsletter_tos={newsletter_tos[0]}
        about_title={about_title[0]}
        about_description={about_description[0]}
        isBlog={isBlog}
      /> */}

      {/* <Footer
        footer_lists={footer_lists}
        footer_copyright_text={footer_copyright_text[0]}
      /> */}
    </div>
  );
};

export default Layout;
