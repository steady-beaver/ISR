import Image from 'next/image';
import styles from './TravelSection.module.scss';

const TravelSection = ({ primaryImg, secondaryImg }) => {
  return (
    <div className={styles.main}>
      <div className={styles.textFrame}>
        <h2 className={`${styles.title} headingH1 uppercase`}>Travel</h2>
        <p className={`${styles.text} textS letterSpacing`}>
          Fantastic professionalism during our wedding, every guest was impressed by the work and the way it was done,
          always ready for the right moments no matter what and doing it happily. Very cooperative with the videographer
          team that was also in the wedding.
        </p>
        <span className={`${styles.link} textS letterSpacing uppercase`}>ASK ME ABOUT DETAILS</span>
      </div>
      <div className={styles.imgCanvas}>
        <div className={styles.primaryImg}>
          <Image src={primaryImg} fill={true} alt="Wedding" className={styles.imageSrc} />
        </div>
        <div className={styles.secondaryImg}>
          <Image src={secondaryImg} fill={true} alt="Wedding" className={styles.imageSrc} />
        </div>
        <div className={styles.travelFlower}>
          <Image
            src={'/pictures/travel/travel-flower.png'}
            width={500}
            height={500}
            alt="Wedding"
            className={styles.imageSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelSection;
