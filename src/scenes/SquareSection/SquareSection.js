import CoveredImg from 'components/CoveredImg/CoveredImg';
import styles from './SquareSection.module.scss';

const SquareSection = ({ data }) => {
  const { imageA, imageB, imageC, squareSectionHeading: title, text } = data;
  return (
    <>
      {title && (
        <div className={styles.main}>
          <div className="portrait">
            <CoveredImg imageNode={imageA?.node} />
          </div>
          <div className="portrait">
            <CoveredImg imageNode={imageB?.node} />
          </div>
          <div className={`landscape ${styles.textContainer}`}>
            <h6 className="subtitle uppercase">{title}</h6>
            <p className="textXS">{text}</p>
          </div>
          <div className="landscape">
            <CoveredImg imageNode={imageC?.node} />
          </div>
        </div>
      )}
    </>
  );
};

export default SquareSection;
