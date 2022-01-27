import type { NextPage } from 'next';
import { getStory } from '@utils/api';

const NotFound: NextPage = () => {
  return (
    <section>
      <h1>Custom 404!</h1>
      <p>Oops not found!</p>
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

export default NotFound;
