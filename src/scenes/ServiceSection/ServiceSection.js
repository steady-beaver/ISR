'use client';
import { useState } from 'react';
import Preview from './Preview';
import model from './ServiceSection.model.js';
import styles from './ServiceSection.module.scss';
import TabMenu from './TabMenu';

const ServiceSection = () => {
  const [option, setOption] = useState('couple'); // couple | wedding | elopement

  return (
    <section className={styles.frame}>
      <div className={`vertical ${styles.verticalPos}`}>
        <div className="subtitle">Services</div>
        <h2 className="headingH1">For you</h2>
      </div>
      {model.map(({ serviceType, ...item }, i) => {
        return (
          <Preview {...item} key={i} className={`${serviceType === option ? styles.selected : styles.notSelected}`} />
        );
      })}

      <TabMenu option={option} setOption={setOption} className={styles.menuPos} />
    </section>
  );
};

export default ServiceSection;
