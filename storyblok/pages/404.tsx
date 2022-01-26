import type { NextPage } from "next";
import { getPage } from "@utils/api";

const NotFound: NextPage = () => {
  return (
    <section>
      <h1>Custom 404!</h1>
      <p>Oops not found!</p>
    </section>
  );
};

export async function getStaticProps() {
  const isPreview = process.env.ENVIRONMENT === "development";

  const { layout } = await getPage(isPreview);

  return {
    props: {
      layout,
      isPreview,
    },
  };
}

export default NotFound;
