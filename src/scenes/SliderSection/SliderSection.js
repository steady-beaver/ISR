import Slider from 'components/Slider/Slider';
import { useEffect, useState } from 'react';
import current from './SliderSection.model';
import styles from './SliderSection.module.scss';

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentIndex((counter) => (counter + 1) % current.length);
    // }, 7000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.mainFrame}>
      {current.map((item, i) => (
        <Slider {...item} key={i} className={`${i === currentIndex ? styles.active : null} `} />
      ))}
    </div>
  );
};

export default SliderSection;
