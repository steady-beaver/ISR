import CoveredImg from 'components/CoveredImg/CoveredImg';
import styles from './OctagonSection.module.scss';

const OctagonSection = ({ data }) => {
  const {
    leftTitle,
    leftText,
    leftTopImage,
    leftMiddleImage,
    leftEndImage,
    rightTitle,
    rightText,
    rightTopImage,
    rightMiddleImage,
    rightEndImage,
  } = data;

  return (
    <div className={styles.main}>
      <div className={styles.col}>
        <div className="portrait">
          <CoveredImg imageNode={leftTopImage.node} />
        </div>
        <div className={` ${styles.textContainer}`}>
          <h6 className="subtitle uppercase">{leftTitle}</h6>
          <p className="textXS">{leftText}</p>
        </div>
        <div className="landscape">
          <CoveredImg imageNode={leftMiddleImage.node} />
        </div>
        <div className="landscape">
          <CoveredImg imageNode={leftEndImage.node} />
        </div>
      </div>
      <div className={styles.col}>
        <div className="landscape">
          <CoveredImg imageNode={rightTopImage.node} />
        </div>
        <div className="landscape">
          <CoveredImg imageNode={rightMiddleImage.node} />
        </div>
        <div className="portrait">
          <CoveredImg imageNode={rightEndImage.node} />
        </div>
        <div className={` ${styles.textContainer}`}>
          <h6 className="subtitle uppercase">{rightTitle}</h6>
          <p className="textXS">{rightText}</p>
        </div>
      </div>
    </div>
  );
};

export default OctagonSection;
