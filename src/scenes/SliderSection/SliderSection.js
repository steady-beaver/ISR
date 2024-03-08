// import Link from 'next/link';
import Slider from 'components/Slider/Slider';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './SliderSection.module.scss';

const SliderSection = () => {
  const properties = {
    duration: 7000,
    autoPlay: true,
    transitionDuration: 1,
    arrows: false,
    infinite: true,
    easing: 'ease',
  };

  const current = [
    {
      photoUrl: '/slider/slide-1.jpg',
      topText: 'MARTHA + CARLOS',
      title: 'CLOSENESS',
      bottomText:
        'They arrived in a camper, said I do on an empty beach in peak season. Their wedding was unique, just like their love.',
    },
    {
      photoUrl: '/slider/slide-2.jpg',
      topText: 'MARTHA + CARLOS',
      title: 'CLOSENESS',
      bottomText:
        'They arrived in a camper, said I do on an empty beach in peak season. Their wedding was unique, just like their love.',
    },
    {
      photoUrl: '/slider/slide-3.jpg',
      topText: 'MARTHA + CARLOS',
      title: 'CLOSENESS',
      bottomText:
        'They arrived in a camper, said I do on an empty beach in peak season. Their wedding was unique, just like their love.',
    },
  ];

  return (
    // <Link href="/sessions">
    <div className={styles.main}>
      <Fade {...properties}>
        {current.map(({ photoUrl, topText, title, bottomText }, index) => (
          <div key={index}>
            <Slider photoUrl={photoUrl} topText={topText} title={title} bottomText={bottomText} />
          </div>
        ))}
      </Fade>
    </div>
    // </Link>
  );
};

export default SliderSection;
