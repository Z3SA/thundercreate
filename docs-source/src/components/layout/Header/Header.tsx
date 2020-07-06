import Link from 'next/link';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/">Main</Link>
      <Link href="/about">About</Link>
      <Link href="/get-started">Get started</Link>
      <Link href="/changelog">Changelog</Link>
    </header>
  );
}