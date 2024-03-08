import styles from './Slider.module.scss';

const Slider = ({ photoUrl, topText, title, bottomText }) => {
  return (
    <div className={styles.main} style={{ backgroundImage: `url(${photoUrl})` }}>
      <span className={`${styles.upperText} headingH6 letterSpacing `}>{topText}</span>
      <h2 className={`${styles.title} headingHero `}>{title}</h2>
      <p className={`${styles.bottomText} text `}>{bottomText}</p>
      <span className={styles.readMore}>READ MORE</span>
    </div>
  );
};

export default Slider;
