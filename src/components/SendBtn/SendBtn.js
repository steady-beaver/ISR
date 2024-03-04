import styles from './SendBtn.module.scss';

const SendBtn = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.sendBtn} `}>
      {children}
    </button>
  );
};

export default SendBtn;
