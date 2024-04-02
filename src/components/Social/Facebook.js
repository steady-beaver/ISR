import Image from 'next/image';
import SocialBg from 'public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';

const Facebook = ({ iconBg }) => {
  return (
    <a
      href="https://www.facebook.com/smileisthekeyphotography/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <Image src="/icons/socialNew/facebook-logo.svg" alt="background" width={12} height={32} />
    </a>
  );
};

export default Facebook;
