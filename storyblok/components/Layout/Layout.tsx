import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { LayoutStoryblok } from 'storyblok.types';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import Spotlight from '@components/Layout/Spotlight';

const Layout: NextPage<{
  readonly story: LayoutStoryblok;
}> = ({ story, children }) => {
  const {
    header_nav_left_links,
    header_nav_right_links,
    cta_header,
    cta_button,
    newsletter_title,
    newsletter_description,
    newsletter_tos,
    about_title,
    about_description,
    footer_lists,
    footer_copyright_text
  } = story.content;

  const { asPath } = useRouter();
  const isBlog = asPath.split('/')[1] === 'blog';

  console.log('layout', story.content);

  return (
    <div className="bitly">
      <Head>
        <title>{isBlog ? 'Bitly Blog' : 'Bitly Site'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        header_nav_left_links={header_nav_left_links}
        header_nav_right_links={header_nav_right_links}
      />

      <main className="content">{children}</main>

      <Spotlight
        cta_header={cta_header[0]}
        cta_button={cta_button[0]}
        newsletter_title={newsletter_title[0]}
        newsletter_description={newsletter_description[0]}
        newsletter_tos={newsletter_tos[0]}
        about_title={about_title[0]}
        about_description={about_description[0]}
        isBlog={isBlog}
      />

      <Footer
        footer_lists={footer_lists}
        footer_copyright_text={footer_copyright_text[0]}
      />
    </div>
  );
};

export default Layout;
