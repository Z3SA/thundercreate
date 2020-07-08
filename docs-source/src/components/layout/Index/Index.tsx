import styles from './Index.module.scss';
import { RoutingLink } from 'components/common';

export function Index() {
  return (
    <div className="col100p">
      <h1 className={styles.Index__title}>Thundercreate Grid</h1>
      <div className="cont">
        <div className="col100p col20s">
          <span className={`btn ${styles.Index__btn}`}>
            <RoutingLink href="/get-started">Get started</RoutingLink>
          </span>
        </div>

        <div className={`col100p col80s ${styles.Index__desc}`}>
          Adaptive flex-grid<br />
          v1.0.0
        </div>
      </div>
    </div>
  );
}