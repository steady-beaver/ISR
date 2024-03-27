import styles from './CoveredImg.module.scss';

const CoveredImg = ({ imageNode }) => {
  const { sourceUrl, altText, srcSet } = imageNode;

  return <img srcSet={srcSet} src={sourceUrl} alt={altText} className={styles.main} />;
};

export default CoveredImg;
