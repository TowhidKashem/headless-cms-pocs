import type { NextPage } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "@lib/contentful";

const BlogPost: NextPage<{ post: any }> = ({ post }) => {
  const { title, author, body } = post.fields;

  return (
    <section>
      <h1>{title}</h1>
      <p>By {author}</p>
      {documentToReactComponents(body)}
    </section>
  );
};

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: items[0],
    },
  };
}

export default BlogPost;
