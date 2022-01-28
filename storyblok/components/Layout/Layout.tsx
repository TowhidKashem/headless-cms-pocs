import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import classNames from 'classnames';
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

      <section
        className={classNames('spotlight-wrapper', {
          blog: isBlog
        })}
      >
        <Spotlight
          cta_header={cta_header[0]}
          cta_button={cta_button[0]}
          isBlog={isBlog}
        />
      </section>

      <Footer
        footer_lists={footer_lists}
        footer_copyright_text={footer_copyright_text[0]}
      />
    </div>
  );
};

export default Layout;
