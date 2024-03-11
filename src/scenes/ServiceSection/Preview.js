import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import Image from 'next/image';
import styles from './Preview.module.scss';

const Preview = ({ title, text, srcPrimary, srcSecondary, className }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.primaryImgFrame}>
        <Image src={srcPrimary} alt="Wedding" fill={true} className={styles.primaryImg} />
      </div>
      <div className={styles.secondaryImgFrame}>
        <Image
          src={'/pictures/white-paper-1.png'}
          width={1000}
          height={1}
          className={styles.paperOrnament}
          alt="Paper decoration"
        />
        <Image src={srcSecondary} alt="Wedding" fill={true} className={styles.secondaryImg} />
      </div>
      <div className={styles.textSection}>
        <p className={`${''} headingH3`}>{title}</p>
        <p className={`${''} text`}>{text}</p>
        <ReadMoreBtn className={styles.readMore} to="/services" />
        {/* <ReadMoreBtn /> */}
      </div>
    </div>
  );
};

export default Preview;
