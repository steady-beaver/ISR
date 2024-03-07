import Image from 'next/image';
import bookSessionFlower from 'public/ornaments/book-session-flower.png';
import olaPhoto from 'public/ornaments/ola.jpg';
import { useInView } from 'react-intersection-observer';
import styles from './PersonalWidget.module.scss';

const PersonalWidget = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  return (
    <div className={`${styles.main} ${className}`}>
      <div ref={ref} className={styles.presentation}>
        <Image
          src={bookSessionFlower}
          className={`${styles.flower} ${inView ? styles.shakePlant : ''} `}
          width={464}
          height={594}
          alt="Alluring Portuguese flower"
        />
        <Image
          src={olaPhoto}
          className={`${styles.olaPicture} ${inView ? styles.shakeOla : ''} `}
          width={200}
          height={200}
          alt="Ola's profile picture"
        />
        <span className={`${styles.signature} signature`}>Ola</span>
      </div>
      <div className={`${''} subtitleStrong uppercase`}>Contact me</div>
      <div className={`${styles.invitationText} textS`}>
        Provide all necessary information about your dream session. I will contact you within 48h via email or phone to
        discuss the details. If you have exact date of arrival please add it to your message.
      </div>
    </div>
  );
};

export default PersonalWidget;
