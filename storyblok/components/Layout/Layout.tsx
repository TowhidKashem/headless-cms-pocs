import type { NextPage } from 'next';
import Head from 'next/head';
import { StoryData } from 'storyblok-js-client';
import { objectToArray } from '@utils/array';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import Spotlight from '@components/Layout/Spotlight';
import type { NavLinks } from './_data';

export interface LayoutProps {
  navLinks: NavLinks;
}

const Layout: NextPage<{
  readonly story: StoryData;
  readonly layout: LayoutProps;
}> = ({ story, layout, children }) => {
  const { bottom_cta } = story.content;

  const navLinks = objectToArray(layout.navLinks);

  return (
    <div className="bitly">
      <Head>
        <title>Bitly global title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navLinks={navLinks} />

      <main className="content">{children}</main>

      <Spotlight bottom_cta={bottom_cta[0]} />

      <Footer navLinks={navLinks} />
    </div>
  );
};

export default Layout;
