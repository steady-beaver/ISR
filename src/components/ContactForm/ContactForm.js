'use client';

import SendBtn from 'components/SendBtn/SendBtn';
import { useState } from 'react';
import Select from 'react-select';
import styles from './ContactForm.module.scss';

const options = [
  { value: '', label: 'Type of session' },
  { value: 'Couple', label: 'Couple session' },
  { value: 'Wedding', label: 'Wedding session' },
  { value: 'Elopement', label: 'Elopement session' },
  { value: 'Foreign', label: 'Sessions outside Portugal' },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    month: '',
    sessionType: '',
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit');
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-MAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="PHONE"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="month"
            name="month"
            placeholder="MONTH"
            value={formData.month}
            onChange={handleChange}
            required
          />
          {/* <input
            type="month"
            id="month"
            name="month"
            placeholder="MONTH"
            value={formData.month}
            onChange={handleChange}
            required
          /> */}
          <Select
            options={options}
            name="sessionType"
            value={formData.sessionType}
            placeholder="TYPE OF SESSION"
            onChange={(val) => handleChange({ target: { name: 'sessionType', value: val } })}
            unstyled
            classNamePrefix="CUSTOM"
            defaultValue=""
            styles={{
              container: (baseStyles) => ({
                ...baseStyles,
                background: 'pink',
                fontFamily: 'basic-sans',
                fontSize: '13px',
                fontWeight: '300',
                lineHeight: '16px',
                letterSpacing: '2px',
                textTransform: 'uppercase',

                width: '60%',
                '@media screen and (max-width: 600px)': {
                  width: '100%',
                },
              }),
              control: (baseStyles, state) => {
                // console.log('STATE', state);
                return {
                  ...baseStyles,
                  borderBottom: `1px solid #140F0D`,
                  paddingLeft: '4px',
                  backgroundColor: state.isFocused ? '#F5EBE5' : '#E6DFD7',
                };
              },
              valueContainer: (baseStyles) => ({
                ...baseStyles,
                // position: 'relative',
                // bottom: '-3px',
              }),
              option: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: state.isFocused ? '#e3d5ca' : '#F5EBE5',
                height: '36px',
                padding: '12px 4px',
              }),
            }}
            required
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE*"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>
        <div className={styles.controls}>
          <SendBtn type="submit">
            <span className="textXS bold uppercase letterSpacing">Send</span>
          </SendBtn>
          <span className="textXS">
            By sending the message you agree to our{' '}
            <a href="#" className={styles.policy}>
              privacy policy.
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
