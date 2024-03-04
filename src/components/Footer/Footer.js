'useClient';

import SendBtn from 'components/SendBtn/SendBtn';
import Facebook from 'components/Social/Facebook';
import Instagram from 'components/Social/Instagram';
import Mail from 'components/Social/Mail';
import Pinterest from 'components/Social/Pinterest';
import { useState } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className={`${styles.main} `}>
      <div className={styles.upperPart}>
        <div className={styles.newsletter}>
          <div className={styles.container}>
            <div className={`${''} headingH3`}>
              Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
              ornare varius fusce et.{' '}
            </div>

            <div className={styles.newsletterInput}>
              <label htmlFor="newsletter" className={`${''} textS bold`}>
                Sign up to newsletter
              </label>
              <div className={styles.wrapper}>
                <input
                  type="email"
                  id="newsletter"
                  placeholder="E-MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={` textXS`}
                />
                <SendBtn onClick={() => console.log(email)} disabled={!email}>
                  <span className="textXS bold uppercase letterSpacing">Send</span>
                </SendBtn>
              </div>
              <span className={`${styles.helper} textXS`}>
                By signing up to our newsletter you agree to our privacy policy.
              </span>
            </div>
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
        <div className={`${styles.rights} textXXS`}>
          <span>All rights reserved - Ola Nandalona 2024</span>
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
