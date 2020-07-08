import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <a target="_blank" href="https://github.com/Z3SA/thundercreate">
        <img src={`${process.env.ASSET_PREFIX}/images/github.png`} />
      </a>
    </footer>
  );
}