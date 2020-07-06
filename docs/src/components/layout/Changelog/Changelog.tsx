import styles from './Changelog.module.scss';
import ReactMarkdown from 'react-markdown';

interface ChangelogProps {
  changelog: string;
}

export function Changelog({ changelog }: ChangelogProps) {
  return (
    <section className={styles.Changelog}>
      <ReactMarkdown source={changelog} />
    </section>
  );
}