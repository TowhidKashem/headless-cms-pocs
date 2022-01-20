import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import Storyblok from "../lib/storyblok";
import useStoryblok from "../hooks/useStoryBlok";
import DynamicComponent from "../components/DynamicComponent";

const Home = ({ story, preview }) => {
  const enablePreviewMode = process.env.ENVIRONMENT === "development";
  story = useStoryblok(story, enablePreviewMode);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />

      <Script
        src="//app.storyblok.com/f/storyblok-v2-latest.js"
        strategy="beforeInteractive"
      />
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
  // load the published content outside or the preview mode
  let sbParams = {
    version: "draft", // or 'published'
  };

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft";
    sbParams.cv = Date.now();
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
  };
}

export default Home;
