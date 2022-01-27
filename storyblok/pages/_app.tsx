// import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Layout from '@components/Layout/Layout';
import LayoutBlog from '@components/Layout/LayoutBlog';
// import Storyblok from '@lib/storyblok';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const isBlog = asPath.split('/')[1] === 'blog';

  const LayoutComponent = isBlog ? LayoutBlog : Layout;

  // useEffect(() => {
  //   Storyblok.flushCache();
  // }, []);

  console.log('pageProps', pageProps);

  return (
    <LayoutComponent story={pageProps.layout}>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </LayoutComponent>
  );
}

export default App;
