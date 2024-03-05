import SendBtn from 'components/SendBtn/SendBtn';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <div className={styles.main}>
      <div>ContactForm</div>
      <div className={styles.controls}>
        <SendBtn>
          <span className="textXS bold uppercase letterSpacing">Send</span>
        </SendBtn>
        <span className="textXS">
          By sending the message you agree to our{' '}
          <a href="#" className={styles.policy}>
            privacy policy.
          </a>
        </span>
      </div>
    </div>
  );
};

export default ContactForm;
