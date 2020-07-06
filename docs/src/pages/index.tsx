import Head from 'next/head'
import { Meta, Index, Footer, Header } from 'components/layout';
import styles from 'styles/pages/Index.module.scss';

export default function Home() {
  return (
    <main className={styles.Index}>
      <Head>
        <Meta />
        <title>Thundercreate | Адаптивная флексбокс-сетка</title>
      </Head>

      <Header />
      <Index />
      <Footer />
    </main>
  )
}
