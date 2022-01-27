import type { NextPage } from 'next';
import { getPage } from '@utils/api';

const Preview: NextPage = () => {
  return (
    <section className="preview content-center">
      <p>Hey, this is the preview page!</p>
    </section>
  );
};

export async function getStaticProps() {
  const { layout } = await getPage();

  return {
    props: {
      layout
    }
  };
}

export default Preview;
