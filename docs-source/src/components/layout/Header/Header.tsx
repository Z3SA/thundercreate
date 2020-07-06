import styles from './Header.module.scss';
import { RoutingLink } from 'components/common';

export function Header() {
  return (
    <header className={styles.Header}>
      <RoutingLink href="/">Main</RoutingLink>
      <RoutingLink href="/about">About</RoutingLink>
      <RoutingLink href="/get-started">Get started</RoutingLink>
      <RoutingLink href="/changelog">Changelog</RoutingLink>
    </header>
  );
}