import type { NextPage } from 'next';
import { getPage } from '@utils/api';

const NotFound: NextPage = () => {
  return (
    <section>
      <h1>Custom 404!</h1>
      <p>Oops not found!</p>
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

export default NotFound;
