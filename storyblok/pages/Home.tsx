import type { NextPage } from "next";
import type { StoryData } from "storyblok-js-client";
import useStoryBlok from "@hooks/useStoryBlok";
import { getPage } from "@utils/api";
import Hero from "@components/Hero";
import CardSpotlight from "@components/CardSpotlight";

const Home: NextPage<{ story: StoryData; isPreview: boolean }> = ({
  story,
  isPreview,
}) => {
  // enable bridge only in prevew mode
  story = useStoryBlok(story, isPreview);

  console.log("story", story);
  const { hero, card_spotlight } = story.content;

  return (
    <section className="home">
      <Hero blok={hero[0]} />
      <CardSpotlight blok={card_spotlight[0]} />
    </section>
  );
};

export async function getStaticProps() {
  const isPreview = process.env.ENVIRONMENT === "development";

  const { layout, story } = await getPage(isPreview, "home");

  return {
    props: {
      layout,
      story,
      isPreview,
    },
  };
}

export default Home;
