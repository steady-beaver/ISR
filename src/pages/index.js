import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import PersonalWidget from 'components/PersonalWidget/PersonalWidget';
import IntroductionSection from 'scenes/IntroductionSection/IntroductionSection';
import ServiceSection from 'scenes/ServiceSection/ServiceSection';
import styles from 'styles/pages/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <ServiceSection />
      </NewContainer>

      <NewContainer>
        <IntroductionSection />
      </NewContainer>

      {/* <NewContainer>
        <TestimonialSection />
      </NewContainer> */}

      <PersonalWidget className={styles.personalWidget} />
    </Layout>
  );
}
