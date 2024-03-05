import styles from './InfoPoint.module.scss';

const InfoPoint = ({ title, children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.ornament} />
      <div className={`${styles.title} subtitleStrong uppercase`}>{title}</div>
      <div className={`${''} textS`}>{children}</div>
    </div>
  );
};

export default InfoPoint;
