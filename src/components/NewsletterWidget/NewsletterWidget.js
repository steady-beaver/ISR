import Newsletter from 'components/Newsletter/Newsletter';
import styles from './NewsletterWidget.module.scss';

const NewsletterWidget = () => {
  return (
    <div className={styles.main}>
      <h5 className={`${''} subtitleSmall uppercase bold letterSpacing`}>Get latest updates</h5>
      <div className={styles.newsletterInput}>
        <Newsletter />
        <span className={`${styles.helper} textXS`}>
          By signing up to our newsletter you agree to our privacy policy.
        </span>
      </div>
    </div>
  );
};

export default NewsletterWidget;
