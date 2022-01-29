import type { NextPage } from 'next';
import type { StoryData } from 'storyblok-js-client';
import useStoryBlok from '@hooks/useStoryBlok';
import { getStory } from '@utils/api';
import CardSpotlight from '@components/CardSpotlight';
import SbEditable from 'storyblok-react';

import Hero from '@components/Hero';
import Card from '@components/Card';
import List from '@components/List';
import { render } from 'storyblok-rich-text-react-renderer';

const Home: NextPage<{ story: StoryData }> = ({ story }) => {
  story = useStoryBlok(story);

  console.log('story', story.content);
  const { hero, card_spotlight } = story.content;

  return (
    <section className="home">
      <SbEditable content={story.content}>
        <Hero blok={hero[0]} />
        <CardSpotlight blok={card_spotlight[0]} />
      </SbEditable>
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
