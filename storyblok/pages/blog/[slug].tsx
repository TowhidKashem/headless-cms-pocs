import type { NextPage, GetStaticProps } from 'next';
import useStoryBlok from '@hooks/useStoryBlok';
import { PAGEBlogPostStoryblok } from 'storyblok.types';
import { render } from 'storyblok-rich-text-react-renderer';
import { getStory, getStories } from '@utils/api';
import Link from '@components/Link';

const BlogPost: NextPage<{ story: PAGEBlogPostStoryblok }> = ({ story }) => {
  story = useStoryBlok(story);

  console.log('story', story);
  const { title, bitlink, thumbnail, date, content } = story.content;

  return (
    <section className="blog">
      <section className="content-center">
        <p>{date}</p>
        <h1 className="font-bold text-5xl mb-10">{title}</h1>
        <p>
          <Link href={bitlink}>{bitlink}</Link>
        </p>
        <main className="content">{render(content)}</main>
      </section>
    </section>
  );
};

export async function getStaticPaths() {
  const stories = await getStories({
    starts_with: 'blog/posts/'
  });

  return {
    paths: stories.map(({ slug }) => '/blog/' + slug),
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { layout, story } = await getStory('blog/posts/' + context.params.slug);

  return {
    props: {
      layout,
      story
    }
  };
};

export default BlogPost;
