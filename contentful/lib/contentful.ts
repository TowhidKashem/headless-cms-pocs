import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_TOKEN as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
