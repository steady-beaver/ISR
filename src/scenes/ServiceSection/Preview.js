import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import styles from './Preview.module.scss';

const Preview = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textSection}>
        <p className={`${''} headingH3`}>
          The session focuses on capturing authentic moments of your love and friendship.
        </p>
        <p className={`${''} text`}>
          This won't be your typical photoshoot. It's a shared experience freezing the magical moments of your
          relationship. No staged smiles here – I aim to capture your genuine joy, love, and closeness. Ready for an
          unforgettable date? Let's capture some real magic!
        </p>
        <ReadMoreBtn className={styles.readMore} to="/services" />
        {/* <ReadMoreBtn /> */}
      </div>
    </div>
  );
};

export default Preview;
