import { StoryParams, StoryData, StoriesParams } from 'storyblok-js-client';
import Storyblok from '@lib/storyblok';

const makeParams = (): StoryParams => {
  const isPreview = process.env.ENVIRONMENT === 'development';

  if (isPreview) {
    return {
      version: 'draft',
      cv: Date.now()
    };
  }

  return {
    version: 'published'
  };
};

export const getStory = async (
  slug?: string
): Promise<{
  story?: StoryData;
  layout: {
    navLinks: StoryData[];
  };
}> => {
  const options = makeParams();

  try {
    const navLinks = await Storyblok.get('cdn/links', options);
    const story = await Storyblok.get('cdn/stories/' + slug, options);

    return {
      story: story.data.story,
      layout: {
        navLinks: navLinks.data.links
      }
    };
  } catch (error) {
    throw error;
  }
};

// export const getStories = async (
//   query: StoriesParams['filter_query']
// ): Promise<StoryData[]> => {
//   const options = makeParams();

//   try {
//     const stories = await Storyblok.getAll('cdn/stories', {
//       ...options,
//       ...query
//     });

//     return stories;
//   } catch (error) {
//     throw error;
//   }
// };
