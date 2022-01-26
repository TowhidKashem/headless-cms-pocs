import type { NextPage } from "next";
import { getPage } from "@utils/api";

const Preview: NextPage = () => {
  return (
    <section className="preview content-center">
      <p>Hey, this is the preview page!</p>
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

export default Preview;
