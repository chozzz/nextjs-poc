import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

type IOtherPagesSlugPageProps = {
  differentContent: string;
}

const OtherPagesSlugPage: NextPage<IOtherPagesSlugPageProps> = (props) => {
  const { differentContent } = props;
  console.log('OtherPagesSlugPage');

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        {
          differentContent
        }
      </h1>

      <div className={styles.grid}>
        <Link href="/" className={styles.card}>
          <h2>Go to Home &rarr;</h2>
        </Link>
        <Link href="/others" className={styles.card}>
          <h2>Catch All Route - Others &rarr;</h2>
        </Link>
        <Link href="/new-page" className={styles.card}>
          <h2>Catch All Route - New Page &rarr;</h2>
        </Link>
        <Link href="/another-page" className={styles.card}>
          <h2>Catch All Route - Another Page &rarr;</h2>
        </Link>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const slug = (params && Array.isArray(params?.slug) ? params.slug[0] : params?.slug) as string;

  return {
    props: {
      differentContent: 'Others / Products / ' + slug,
    } as IOtherPagesSlugPageProps,
    revalidate: 600 // In seconds (60 hours)
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    paths: [{
      params: {
        productName: 'products',
        slug: 'slug-1'
      }
    }, {
      params: {
        productName: 'products',
        slug: 'slug-2'
      }
    }, {
      params: {
        productName: 'products',
        slug: 'slug-3'
      }
    }], fallback: 'blocking'
  };
};

export default OtherPagesSlugPage;
