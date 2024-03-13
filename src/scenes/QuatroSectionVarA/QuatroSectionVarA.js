import Image from 'next/image';
import styles from './QuatroSectionVarA.module.scss';

const QuatroSectionVarA = ({ header, title, p1, p2, srcPrimary, srcSecondary }) => {
  return (
    <div className={styles.mainVarA}>
      <div className={styles.verticalFrameVarA}>
        <h2 className={`${''} headingH1 vertical uppercase`}>{header}</h2>
      </div>
      <div className={styles.desktopLayoutVarA}>
        <div className={styles.leftColVarA}>
          <div className={styles.primaryFrameVarA}>
            <Image src={srcPrimary} alt="Wedding" width={375} height={600} className={styles.imgPrimary} />
          </div>

          <p className={`${styles.p2VarA} text`}>{p2}</p>
        </div>
        <div className={styles.rightColVarA}>
          <h3 className={`${styles.titleVarA} headingH3`}>{title}</h3>
          <p className={`${styles.p1VarA} text`}>{p1}</p>
          <div className={styles.secondaryFrameVarA}>
            <Image
              src={'/pictures/white-paper-1.png'}
              width={200}
              height={200}
              className={styles.paperOrnamentVarA}
              alt="Paper decoration"
            />
            <Image src={srcSecondary} alt="Wedding" fill={true} />
          </div>
        </div>
      </div>

      {/* ================================================= */}

      <div className={styles.mobileLayoutVarA}>
        <div className={styles.topPartFrame}>
          <div className={styles.primaryFrameVarA}>
            <Image src={srcPrimary} alt="Wedding" width={260} height={400} />
          </div>
          <div className={styles.secondaryFrameVarA}>
            <Image
              src={'/pictures/white-paper-1.png'}
              width={130}
              height={200}
              className={styles.paperOrnamentVarA}
              alt="Paper decoration"
            />
            <Image src={srcSecondary} className={styles.secondaryImg} alt="Wedding" width={200} height={200} />
          </div>
        </div>
        <div className={styles.bottomPartFrame}>
          <h3 className={`${styles.titleVarA} headingH3`}>{title}</h3>
          <p className={`${styles.p1VarA} text`}>{p1}</p>
        </div>
      </div>
    </div>
  );
};

export default QuatroSectionVarA;
