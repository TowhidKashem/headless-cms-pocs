import type { NextPage } from 'next';
import { getLayout } from '@utils/api';
import Layout, { LayoutProps } from '@components/Layout/Layout';

const Preview: NextPage<{ layout: LayoutProps }> = ({ layout }) => {
  return <Layout layout={layout} />;
};

export async function getStaticProps() {
  const layout = await getLayout();

  return {
    props: {
      layout
    }
  };
}

export default Preview;
