'use client';
import Preview from './Preview';
// import { useState } from 'react';
import styles from './ServiceSection.module.scss';
// import TabMenu from './TabMenu';

const ServiceSection = () => {
  // const [option, setOption] = useState('');
  return (
    <section className={styles.frame}>
      <div className="vertical">
        <div className="subtitle">Services</div>
        <h2 className="headingH1">For you</h2>
      </div>
      {/* <div className="">Next one</div> */}
      <Preview />
      {/* <TabMenu option={option} setOption={setOption} />
      {option} */}
    </section>
  );
};

export default ServiceSection;
