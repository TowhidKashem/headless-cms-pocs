import type { NextPage } from 'next';
import { getStory } from '@utils/api';

const Preview: NextPage = () => {
  return (
    <section className="preview content-center">
      <p>Hey, this is the preview page!</p>
    </section>
  );
};

export async function getStaticProps() {
  const { layout } = await getStory();

  return {
    props: {
      layout
    }
  };
}

export default Preview;
