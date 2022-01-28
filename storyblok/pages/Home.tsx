import type { NextPage } from 'next';
import type { StoryData } from 'storyblok-js-client';
import useStoryBlok from '@hooks/useStoryBlok';
import { getStory, getStories } from '@utils/api';
import Hero from '@components/Hero';
import CardSpotlight from '@components/CardSpotlight';

const Home: NextPage<{ story: StoryData }> = ({ story }) => {
  story = useStoryBlok(story);

  console.log('story', story);
  const { hero, card_spotlight } = story.content;

  // (async () => {
  //   try {
  //     const stories = await getStories({
  //       starts_with: 'blog/category'
  //     });

  //     console.log('test', stories);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // })();

  return (
    <section className="home">
      <Hero blok={hero[0]} />
      <CardSpotlight blok={card_spotlight[0]} />
    </section>
  );
};

export async function getStaticProps() {
  const { layout, story } = await getStory('home');

  return {
    props: {
      layout,
      story
    }
  };
}

export default Home;
