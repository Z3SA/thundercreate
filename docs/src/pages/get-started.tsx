import styles from '../styles/pages/GetStarted.module.scss';
import Head from 'next/head';
import { Meta, Header, GetStarted, Footer } from 'components/layout';

export default function GetStartedPage() {
  return (
    <main className={styles.GetStarted}>
      <Head>
        <Meta />
        <title>Thundercreate | Адаптивная флексбокс-сетка</title>
      </Head>

      <Header />
      <GetStarted />
      <Footer />
    </main>
  );
}