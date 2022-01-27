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
): Promise<{ layout: StoryData; story?: StoryData }> => {
  const params = makeParams();

  try {
    // Fetch the layout story for all routes, it includes global data like navigation, footer, etc
    const layout = await Storyblok.get('cdn/stories/layout', params);

    if (slug) {
      const story = await Storyblok.get('cdn/stories/' + slug, params);

      return {
        layout: layout.data.story,
        story: story.data.story
      };
    } else {
      return {
        layout: layout.data.story
      };
    }
  } catch (error) {
    throw error;
  }
};

export const getStories = async (query: StoriesParams['filter_query']) => {
  const params = makeParams();

  try {
    const story = await Storyblok.getAll('cdn/stories', {
      ...params,
      ...query
    });

    return {
      stories: story
    };
  } catch (error) {
    throw error;
  }
};
