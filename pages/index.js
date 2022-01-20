import Head from "next/head";
import styles from "../styles/Home.module.css";
import Storyblok from "../lib/storyblok";
import DynamicComponent from "../components/DynamicComponent";

const Home = ({ story, preview }) => {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // enable bridge only in prevew mode

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />
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
    revalidate: 3600, // revalidate every hour
  };
}

export default Home;
