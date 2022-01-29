import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '@components/Layout/Layout';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  console.log('pageProps', pageProps);

  return (
    <Layout layout={pageProps.layout}>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </Layout>
  );
}

export default App;
