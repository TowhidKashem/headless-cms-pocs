import type { NextPage } from 'next';
import type { StoryData } from 'storyblok-js-client';
import useStoryBlok from '@hooks/useStoryBlok';
import { getStory } from '@utils/api';
import CardSpotlight from '@components/CardSpotlight';
import SbEditable from 'storyblok-react';
import Layout, { LayoutProps } from '@components/Layout/Layout';
import Hero from '@components/Hero';
import Card from '@components/Card';
import List from '@components/List';
import { render } from 'storyblok-rich-text-react-renderer';

const Home: NextPage<{ layout: LayoutProps; story: StoryData }> = ({
  story,
  layout
}) => {
  story = useStoryBlok(story);

  console.log('story', story.content);
  const { hero, card_spotlight } = story.content;

  return (
    <section className="home">
      <SbEditable content={story.content}>
        <Layout story={story} layout={layout}>
          <Hero blok={hero[0]} />
          <CardSpotlight blok={card_spotlight[0]} />
        </Layout>
      </SbEditable>
    </section>
  );
};

export async function getStaticProps() {
  const { story, layout } = await getStory('home');

  return {
    props: {
      story,
      layout
    }
  };
}

export default Home;
