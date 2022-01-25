import { useEffect, useState } from "react";
import Storyblok from "../lib/storyblok";

const useStoryblok = (originalStory, enablePreviewMode) => {
  const [story, setStory] = useState(originalStory);

  const initEventListeners = () => {
    const { StoryblokBridge } = window;
    if (typeof StoryblokBridge !== "undefined") {
      // initialize the bridge with your token
      const storyblokInstance = new StoryblokBridge();

      // reload on Next.js page on save or publish event in the Visual Editor
      storyblokInstance.on(["change", "published"], () =>
        location.reload(true)
      );

      // live update the story on input events
      storyblokInstance.on("input", (event) => {
        // check if the ids of the event and the passed story match
        if (story && event.story.content._uid === story.content._uid) {
          // change the story content through the setStory function
          setStory(event.story);
        }
      });

      storyblokInstance.on("enterEditmode", (event) => {
        // loading the draft version on initial enter of editor
        Storyblok.get(`cdn/stories/${event.storyId}`, {
          version: "draft",
        })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };

  useEffect(() => {
    if (enablePreviewMode) {
      initEventListeners();
    }
  }, [originalStory, enablePreviewMode, setStory]); // runs the effect only once & defines effect dependencies

  useEffect(() => {
    setStory(originalStory);
  }, [originalStory]);

  return story;
};

export default useStoryblok;
