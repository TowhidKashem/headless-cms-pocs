import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Recipe: NextPage<{ recipe: any }> = ({ recipe }) => {
  const { cookingTime, slug, thumbnail, title } = recipe.fields;

  const {
    file: { url },
  } = thumbnail.fields;

  return (
    <article key={recipe.sys.id} className="card">
      <h1>{title}</h1>
      <Image src={"https:" + url} alt="" width={200} height={200} />
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} min to make</p>
        </div>
        <div className="actions">
          <Link href={`/recipes/${slug}`}>
            <a>Cook This</a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Recipe;
