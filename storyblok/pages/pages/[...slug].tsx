import type { NextPage } from 'next';
import type { InnerPageStoryblok } from 'storyblok.types';
import SbEditable from 'storyblok-react';
import useStoryBlok from '@hooks/useStoryBlok';
import { getStory } from '@utils/api';
import Layout, { LayoutProps } from '@components/Layout/Layout';
import Hero from '@components/Hero';
import HeroDetail from '@components/HeroDetail';

const Page: NextPage<{ story: InnerPageStoryblok; layout: LayoutProps }> = ({
  story,
  layout
}) => {
  story = useStoryBlok(story);

  const { hero, detail_cards } = story.content;

  return (
    <SbEditable content={story.content}>
      <Layout layout={layout}>
        <section className="page content-center">
          <Hero blok={hero[0]} />

          {detail_cards.map((card, index) => (
            <HeroDetail
              key={card._uid}
              blok={card}
              alignImageLeft={index % 2 !== 0}
            />
          ))}
        </section>
      </Layout>
    </SbEditable>
  );
};

export async function getStaticPaths() {
  // const stories = await getStories({
  //   starts_with: 'blog/category/'
  // });

  return {
    // paths: stories.map(({ full_slug }) => '/' + full_slug),
    paths: ['/pages/why-bitly/bitly-101'],
    fallback: false
  };
}

export async function getStaticProps() {
  const { story, layout } = await getStory('why-bitly/bitly-101');

  return {
    props: {
      story,
      layout
    }
  };
}

export default Page;
