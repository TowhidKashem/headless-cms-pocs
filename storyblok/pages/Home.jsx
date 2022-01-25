import Storyblok from "../lib/storyblok";
import useStoryblok from "../hooks/useStoryBlok";
// import RenderBlok from "../components/RenderBlok";

import Hero from "../components/Bloks/Hero";
import CardSpotlight from "../components/Bloks/CardSpotlight";

const Home = ({ story, preview }) => {
  const enablePreviewMode = process.env.ENVIRONMENT === "development";
  story = useStoryblok(story, enablePreviewMode);

  const { hero, card_spotlight } = story.content;

  return (
    <>
      <Hero blok={hero[0]} />
      <CardSpotlight blok={card_spotlight[0]} />
    </>
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
