import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import ContactForm from 'components/ContactForm/ContactForm';
import Header from 'components/Header';
import InfoPoint from 'components/InfoPoint/InfoPoint';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import PersonalWidget from 'components/PersonalWidget/PersonalWidget';

import styles from '../styles/pages/NewPageStyles.module.scss';

export default function Contacts() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1>Contacts</h1>
      </Header>

      <NewContainer>
        <PersonalWidget />

        <ContactForm />

        <div className={styles.infoContainer}>
          <InfoPoint title="time frame">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint title="confirmation">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
          <InfoPoint title="contract">
            Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc
            ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus.
          </InfoPoint>
        </div>
      </NewContainer>
    </Layout>
  );
}
