import React from 'react';
import styles from './TimelineSection.module.scss';

const TimelineSection = ({ children }) => {
  return (
    <div className={styles.main}>
      <h6 className={`${styles.title} subtitleStrong uppercase`}>I guess I've always known what I wanted.</h6>
      <p className={`text ${styles.text}`}>
        Sitting still was never my thing. I've never worked a 9-to-5 job. I've always had one foot in the world, drawing
        inspiration from people and travels. That's why I value naturalness in photography so much.
      </p>
      <div className={styles.wrapper}>
        {React.Children.map(children, (child, index) => {
          return <div className={` ${index % 2 === 0 ? styles.leftSide : styles.rightSide}`}>{child}</div>;
        })}
      </div>
    </div>
  );
};

export default TimelineSection;
