import styles from './TabMenu.module.scss';

const TabMenu = ({ option, setOption, className }) => {
  return (
    <div className={className}>
      <ol className={styles.olStyles}>
        <li
          className={`${option === 'couple' ? styles.active : ''} ${styles.liItem} subtitleSmall`}
          onClick={() => setOption('couple')}
        >
          <span className={` subtitleSmall ${styles.liText} `}>Couple sessions</span>
        </li>
        <li
          className={`${option === 'wedding' ? styles.active : ''} ${styles.liItem} subtitleSmall`}
          onClick={() => setOption('wedding')}
        >
          <span className={`${styles.liText} subtitleSmall`}>Wedding sessions</span>
        </li>
        <li
          className={`${option === 'elopement' ? styles.active : ''} ${styles.liItem} subtitleSmall`}
          onClick={() => setOption('elopement')}
        >
          <span className={`${styles.liText} subtitleSmall`}>Elopement sessions</span>
        </li>
      </ol>
    </div>
  );
};

export default TabMenu;
