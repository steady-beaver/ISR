import Image from 'next/image';
import SocialBg from 'public/icons/socialNew/social-bg.svg';
import styles from './logo.module.scss';

const Pinterest = ({ iconBg }) => {
  return (
    <a
      href="https://www.pinterest.pt/smileisthekeyphoto/"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.main}  ${iconBg}`}
    >
      <SocialBg className={` ${styles.bg}`} />
      <Image src="/icons/socialNew/pinterest-logo.svg" alt="background" width={13} height={13} />
    </a>
  );
};

export default Pinterest;
