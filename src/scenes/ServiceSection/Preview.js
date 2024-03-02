import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import Image from 'next/image';
import styles from './Preview.module.scss';

const Preview = ({ title, text, srcPrimary, srcSecondary }) => {
  return (
    <div className={styles.main}>
      <Image src={srcPrimary} alt="Wedding" width={1000} height={1} className={styles.primaryImg} />
      <Image src={srcSecondary} alt="Wedding" width={1000} height={1} className={styles.secondaryImg} />
      <Image src={'/pictures/white-paper-1.png'} width={1000} height={1} className={styles.paperOrnament} />
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
