import type { NextPage } from "next";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "@lib/contentful";

const RecipeDetail: NextPage<{ recipe: any }> = ({ recipe }) => {
  const { cookingTime, featureImage, ingredients, method, slug, title } =
    recipe.fields;

  const {
    file: {
      url,
      details: {
        image: { width, height },
      },
    },
  } = featureImage.fields;

  return (
    <section>
      <Image src={"https:" + url} alt="" width={width} height={500} />
      <h1>{title}</h1>
      <p>Cooking time: {cookingTime}</p>
      <h3>Ingridients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      {documentToReactComponents(method)}
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
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipe: items[0],
    },
  };
}

export default RecipeDetail;
