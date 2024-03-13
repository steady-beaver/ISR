import styles from './InfoPoint.module.scss';

const InfoPoint = ({ title, children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.ornament} />
      <div className={`${styles.title} subtitleStrong uppercase ${styles.customSmallFont}`}>{title}</div>
      <div className={`textS ${styles.customSmallFont}`}>{children}</div>
    </div>
  );
};

export default InfoPoint;
