import Image from 'next/image';
import SocialBg from 'public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';

const Instagram = ({ iconBg }) => {
  return (
    <a
      href="https://www.instagram.com/smileisthekeyphotography/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <Image src="/icons/socialNew/instagram-logo.svg" alt="background" width={15} height={15} />
    </a>
  );
};

export default Instagram;
