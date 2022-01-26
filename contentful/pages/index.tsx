import type { NextPage } from "next";
import { client } from "@lib/contentful";
import Recipe from "@components/RecipeCard";

const RecipeList: NextPage<{ recipes: any; header: any }> = ({
  recipes,
  header,
}) => {
  console.log("header", header);

  return (
    <section>
      {recipes.map((recipe) => (
        <Recipe key={recipe.sys.id} recipe={recipe} />
      ))}
    </section>
  );
};

export async function getStaticProps() {
  const { item } = await client.getEntries({
    content_type: "headerNav",
  });

  console.log("item -------> ", item);

  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
      header: item,
    },
  };
}

export default RecipeList;
