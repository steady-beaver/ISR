import InfoPoint from 'components/InfoPoint/InfoPoint';
import Image from 'next/image';
import styles from './TripleSection.module.scss';

const TripleSection = ({ photoSrc }) => {
  return (
    <div className={styles.main}>
      <div className={styles.verticalFrame}>
        <h2 className={`${styles.title} headingH1 vertical uppercase`}>Wedding</h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.colLeft}>
          <div className={styles.primaryImg}>
            <Image src={photoSrc} fill={true} alt="Wedding" className={styles.primarySrc} />
            <Image
              src={'/ornaments/tape-ornament.png'}
              width={100}
              height={100}
              className={styles.tapeOrnament}
              alt="Paper tape decoration"
            />
          </div>
          <h3 className={`${styles.title} headingH3`}>
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </h3>
          <p className={`${styles.text} text`}>
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus.
          </p>
        </div>
        <div className={styles.colRight}>
          <InfoPoint title="Package 1" extra={'3-hours session • 3-hours session • 3-hours session'}>
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint
            title="Package 2"
            extra={'3-hours session • 3-hours session • 3-hours session • 3-hours session  • 3-hours session'}
          >
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint title="Package 3" extra={'3-hours session • 3-hours session • 3-hours session'}>
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
        </div>
      </div>
    </div>
  );
};

export default TripleSection;
