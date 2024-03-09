import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import IntroductionSection from 'scenes/IntroductionSection/IntroductionSection';
import ServiceSection from 'scenes/ServiceSection/ServiceSection';
import SliderSection from 'scenes/SliderSection/SliderSection';

export default function Home() {
  return (
    <Layout>
      <SliderSection />

      <NewContainer>
        <ServiceSection />
      </NewContainer>

      <NewContainer>
        <IntroductionSection />
      </NewContainer>

      {/* <NewContainer>
        <TestimonialSection />
      </NewContainer> */}

      {/* <PersonalWidget className={styles.personalWidget} /> */}
    </Layout>
  );
}
