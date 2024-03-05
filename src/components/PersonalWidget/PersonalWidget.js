import Image from 'next/image';
import olaPhoto from 'public/ornaments/ola.jpg';
import styles from './PersonalWidget.module.scss';

const PersonalWidget = () => {
  return (
    <div className={styles.main}>
      <div className={styles.presentation}>
        <Image src={olaPhoto} className={styles.olaPicture} width={200} alt="Ola's profile picture" />
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
