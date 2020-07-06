import styles from '../styles/pages/Index.module.scss';
import Head from 'next/head';
import { Meta, Header, Footer, About } from 'components/layout';

export default function GetStartedPage() {
  return (
    <main className={styles.Index}>
      <Head>
        <Meta />
        <title>Thundercreate | Adaptive grid</title>
      </Head>

      <Header />
      <About />
      <Footer />
    </main>
  );
}