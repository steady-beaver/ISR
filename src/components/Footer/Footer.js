import Facebook from 'components/Social/Facebook';
import Instagram from 'components/Social/Instagram';
import Mail from 'components/Social/Mail';
import Pinterest from 'components/Social/Pinterest';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.main} `}>
      <div className={styles.upperPart}>
        <div className={styles.newsletter}>
          <div className={styles.container}>
            <div className={`${''} headingH3`}>
              Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
              ornare varius fusce et.{' '}
            </div>
            <div>news letter input TODO</div>
          </div>
        </div>
        <div className={`${styles.footerCol} `}>
          <span className="subtitle bold">Explore</span>
          <ul className="subtitle">
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.footerCol} `}>
          <span className="subtitle bold">Support</span>
          <ul className="subtitle">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomPart}>
        <div className="textXXS">
          <span className={`${styles.rights} `}>All rights reserved - Ola Nandalona 2024</span>
          <span>Design: Nooneway Studio</span>
        </div>
        <div className={`${styles.media} `}>
          <Facebook iconBg={styles.iconBg} />
          <Instagram iconBg={styles.iconBg} />
          <Pinterest iconBg={styles.iconBg} />
          <Mail iconBg={styles.iconBg} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
