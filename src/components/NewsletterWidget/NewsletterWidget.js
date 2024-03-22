import RightArrowBtn from 'components/RightArrowBtn/RightArrowBtn';
import { useState } from 'react';
import styles from './NewsletterWidget.module.scss';

const NewsletterWidget = () => {
  const [email, setEmail] = useState('');

  return (
    <div className={styles.main}>
      <h5 className={`${''} subtitleSmall uppercase bold letterSpacing`}>Get latest updates</h5>
      <div className={styles.newsletterInput}>
        <div className={styles.wrapper}>
          <input
            type="email"
            id="newsletter"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={` textXS`}
          />
          <RightArrowBtn onClick={() => console.log(email)} disabled={!email} className={styles.sendBtn} />
        </div>
        <span className={`${styles.helper} textXS`}>
          By signing up to our newsletter you agree to our privacy policy.
        </span>
      </div>
    </div>
  );
};

export default NewsletterWidget;
