import type { NextPage } from "next";
import { client } from "@lib/contentful";
import Recipe from "@components/RecipeCard";

const RecipeList: NextPage<{ recipes: any }> = ({ recipes }) => {
  console.log("recipes", recipes);
  return (
    <section>
      {recipes.map((recipe) => (
        <Recipe key={recipe.sys.id} recipe={recipe} />
      ))}
    </section>
  );
};

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
  };
}

export default RecipeList;
