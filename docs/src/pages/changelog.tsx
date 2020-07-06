import styles from '../styles/pages/GetStarted.module.scss';
import Head from 'next/head';
import { Meta, Header, Footer, Changelog } from 'components/layout';
import fs from 'fs';

interface ChangelogPageProps {
  changelog: string;
}

export function getStaticProps(): { props: ChangelogPageProps } {
  const changelog = fs.readFileSync('../CHANGELOG.md', { encoding: 'utf-8' });
  return { props: { changelog } };
}

export default function GetStartedPage({ changelog }: ChangelogPageProps) {
  return (
    <main className={styles.GetStarted}>
      <Head>
        <Meta />
        <title>Thundercreate | Adaptive grid</title>
      </Head>

      <Header />
      <Changelog changelog={changelog} />
      <Footer />
    </main>
  );
}