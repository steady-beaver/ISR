import Slider from 'components/Slider/Slider';
import { useEffect, useState } from 'react';
import styles from './SliderSection.module.scss';
import Link from 'next/link';

const SliderSection = ({ popularSessions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((counter) => (counter + 1) % popularSessions.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [popularSessions]);

  return (
    <div className={styles.mainFrame}>
      {popularSessions.map((item, i) => (
        <Link key={item.slug} href={`/session/${item.slug}`}>
          <Slider
            photoUrl={item.featuredImage.node.sourceUrl}
            topText={item.title}
            title={item.main.heroLabel}
            bottomText={item.main.description}
            className={`${i === currentIndex ? styles.active : null} `}
            imageNode={item.featuredImage.node}
          />
        </Link>
      ))}
    </div>
  );
};

export default SliderSection;
