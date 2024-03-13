import InfoPoint from 'components/InfoPoint/InfoPoint';
import styles from './FaqSection.module.scss';

const FaqSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h4 className={`${''} headingH4 uppercase`}>All vital moments</h4>
        <p className={`${''} textS`}>
          Having Ola as our photographer at our elopement in Portugal could not have been better. I highly recommend
          her, because Ola was so easy going and great to talk to and still the results of the pictures were just
          fabolus. She made us feel very comfy and with the different kinds of pictures she captured all vital moments
          and emotions. We are still in love with the photos and can not stop looking at them.
        </p>
      </div>
      <div className={styles.infoGrid}>
        <InfoPoint title="pre-wedding">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
        <InfoPoint title="album">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
        <InfoPoint title="post-wedding">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
        <InfoPoint title="organization">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
        <InfoPoint title="travel">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
        <InfoPoint title="post-wedding">
          Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare
          varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
        </InfoPoint>
      </div>
    </div>
  );
};

export default FaqSection;
