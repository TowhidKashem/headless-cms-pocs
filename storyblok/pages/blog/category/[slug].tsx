import type { NextPage } from 'next';
import useStoryBlok from '@hooks/useStoryBlok';
import { PAGEBlogIndexStoryblok } from 'storyblok.types';
import { getStory, getStories } from '@utils/api';
import HeroBlog from '@components/HeroBlog';
import Storyblok from '@lib/storyblok';

const BlogIndex: NextPage<{ story: PAGEBlogIndexStoryblok }> = ({ story }) => {
  story = useStoryBlok(story);

  console.log('story', story);
  const { hero, category_name } = story.content;

  return (
    <section className="blog">
      <section className="content-center">
        <span className="font-bold text-sm text-gray-500">Posts about</span>
        <h1 className="font-bold text-5xl mb-10">{category_name[0].text}</h1>
        <HeroBlog blok={hero[0]} />
      </section>
    </section>
  );
};

export async function getStaticPaths() {
  const { stories } = await getStories({
    starts_with: 'blog/category'
  });

  return {
    paths: stories.map(({ full_slug }) => full_slug),
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { layout, story } = await getStory(
    `/blog/category/${context.params.slug}`
  );

  return {
    props: {
      layout,
      story
    }
  };
}

export default BlogIndex;
