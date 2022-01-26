import { StoryParams, StoryData } from "storyblok-js-client";
import Storyblok from "@lib/storyblok";

export const getPage = async (
  isPreview: boolean,
  slug?: string
): Promise<{ layout: StoryData; story?: StoryData }> => {
  const params: StoryParams = {
    version: "published",
  };

  if (isPreview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  try {
    const layout = await Storyblok.get("cdn/stories/layout", params);

    if (slug) {
      const story = await Storyblok.get("cdn/stories/" + slug, params);

      return {
        layout: layout.data.story,
        story: story.data.story,
      };
    } else {
      return {
        layout: layout.data.story,
      };
    }
  } catch (error) {
    throw error;
  }
};
