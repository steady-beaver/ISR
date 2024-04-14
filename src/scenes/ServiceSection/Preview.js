import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Preview.module.scss';

const Preview = ({ title, text, srcPrimary, srcSecondary, link, className }) => {
  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.primaryImgFrame}>
        <Image src={srcPrimary} alt="Wedding" fill={true} className={`${styles.primaryImg} imgShadow`} />
      </div>
      <div className={styles.secondaryImgFrame}>
        <Image
          src={'/pictures/white-paper-1.png'}
          width={1000}
          height={1}
          className={styles.paperOrnament}
          alt="Paper decoration"
        />
        <Image src={srcSecondary} alt="Wedding" fill={true} className={`${styles.secondaryImg} imgShadow`} />
      </div>
      <div className={styles.textSection}>
        <Link href={link}>
          <h4 className={`${styles.title} headingH3`}>{title}</h4>
        </Link>
        <p className={` textS`}>{text}</p>
        <ReadMoreBtn className={styles.readMore} to={`${link}`} />
      </div>
    </div>
  );
};

export default Preview;
