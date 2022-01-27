import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '@components/Layout/Layout';
import Storyblok from '@lib/storyblok';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   Storyblok.flushCache();
  // }, []);

  console.log('pageProps', pageProps);

  return (
    <Layout story={pageProps.layout} isPreview={pageProps.isPreview}>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </Layout>
  );
}

export default App;
