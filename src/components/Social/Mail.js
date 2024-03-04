import Image from 'next/image';
import SocialBg from 'public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';

const Mail = ({ iconBg }) => {
  return (
    <a href="https://hotmail.com" target="_blank" rel="noopener noreferrer" className={`${styles.main}  ${iconBg}`}>
      <SocialBg className={` ${styles.bg}`} />
      <Image src="/icons/socialNew/mail-logo.svg" alt="background" width={19} height={32} />
    </a>
  );
};

export default Mail;
