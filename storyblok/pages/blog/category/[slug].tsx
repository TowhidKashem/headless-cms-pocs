import type { NextPage } from 'next';
import type { StoryData } from 'storyblok-js-client';
import useStoryBlok from '@hooks/useStoryBlok';
import { getPage } from '@utils/api';
import Hero from '@components/Hero';
import CardSpotlight from '@components/CardSpotlight';

const BlogIndex: NextPage<{ story: StoryData }> = ({ story }) => {
  story = useStoryBlok(story);

  console.log('story', story);
  const { hero } = story.content;

  return <section className="blog">sss</section>;
};

export async function getStaticPaths() {
  // const res = await client.getEntries({
  //   content_type: "recipe",
  // });

  // const paths = res.items.map((item) => {
  //   return {
  //     params: {
  //       slug: item.fields.slug,
  //     },
  //   };
  // });

  return {
    paths: ['/blog/category/branding'],
    fallback: false
  };
}

export async function getStaticProps() {
  const { layout, story } = await getPage('branding');

  return {
    props: {
      layout,
      story
    }
  };
}

export default BlogIndex;
