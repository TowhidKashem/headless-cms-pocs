import type { NextPage } from 'next';
import type { HeaderStoryblok, BottomCtaStoryblok } from 'storyblok.types';
import type { NavLinks } from './_data';
import { objectToArray } from '@utils/array';
import Head from 'next/head';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
import CTA from '@components/Layout/CTA';

export interface LayoutProps {
  navLinks: NavLinks;
}

const Layout: NextPage<{
  readonly layout: LayoutProps;
  readonly header: HeaderStoryblok[];
  readonly bottom_cta: BottomCtaStoryblok[];
}> = ({ header, bottom_cta, layout, children }) => {
  const navLinks = objectToArray(layout.navLinks);

  return (
    <div className="bitly">
      <Head>
        <title>Bitly global title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header leftNav={navLinks} rightNav={header[0]} />

      <main className="content">{children}</main>

      <CTA bottom_cta={bottom_cta[0]} />

      <Footer navLinks={navLinks} />
    </div>
  );
};

export default Layout;
