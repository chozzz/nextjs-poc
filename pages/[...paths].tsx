import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Home, { IHomePageProps } from '.';

const CatchAllPage = Home;

export const getStaticProps: GetStaticProps = async ( { locale, params } ) => {
  const paths = ( params?.['paths'] || [] ) as string[];
  console.log('CatchAllPage');
  return {
    props: {
      content: 'Catch all route - ' + paths.join('/'),
    } as IHomePageProps,
    notFound: false,
    revalidate: 600 // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async ( { locales } ) => {
  return { paths: ['/others', '/new-page', '/another-page'], fallback: 'blocking' };
};

export default CatchAllPage
