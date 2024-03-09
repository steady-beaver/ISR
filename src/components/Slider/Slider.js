import styles from './Slider.module.scss';

const Slider = ({ photoUrl, topText, title, bottomText, className }) => {
  return (
    <div className={`${styles.main} ${className} `} style={{ backgroundImage: `url(${photoUrl})` }}>
      <span className={`${styles.upperText} subtitle letterSpacing `}>{topText}</span>
      <h2 className={`${styles.title} `}>{title}</h2>
      <p className={`${styles.bottomText} text `}>{bottomText}</p>
      <span className={styles.readMore}>READ MORE</span>
    </div>
  );
};

export default Slider;
