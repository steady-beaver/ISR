import CoveredImg from 'components/CoveredImg/CoveredImg';
import styles from './OctagonSection.module.scss';

const OctagonSection = ({ data }) => {
  console.log('DATA: ', data);

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
    <>
      <div className={styles.main}>
        {leftTitle && (
          <div className={styles.col}>
            <div className="portrait">
              <CoveredImg imageNode={leftTopImage?.node} />
            </div>
            <div className={` ${styles.textContainer}`}>
              <h6 className="subtitle uppercase">{leftTitle ?? 'Left title'}</h6>
              <p className="textXS">{leftText ?? 'Left text'}</p>
            </div>
            <div className="landscape">
              <CoveredImg imageNode={leftMiddleImage?.node} />
            </div>
            <div className="landscape">
              <CoveredImg imageNode={leftEndImage?.node} />
            </div>
          </div>
        )}
        {rightTitle && (
          <div className={styles.col}>
            <div className="landscape">
              <CoveredImg imageNode={rightTopImage?.node} />
            </div>
            <div className="landscape">
              <CoveredImg imageNode={rightMiddleImage?.node} />
            </div>
            <div className="portrait">
              <CoveredImg imageNode={rightEndImage?.node} />
            </div>
            <div className={` ${styles.textContainer}`}>
              <h6 className="subtitle uppercase">{rightTitle ?? 'Right title'}</h6>
              <p className="textXS">{rightText ?? 'Right text'}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OctagonSection;
