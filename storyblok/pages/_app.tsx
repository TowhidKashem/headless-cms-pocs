import type { AppProps } from 'next/app';
import Script from 'next/script';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default App;
