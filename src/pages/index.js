import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import IntroductionSection from 'scenes/IntroductionSection/IntroductionSection';
import ServiceSection from 'scenes/ServiceSection/ServiceSection';
import SliderSection from 'scenes/SliderSection/SliderSection';
import VideoSection from 'scenes/VideoSection/VideoSection';

export default function Home() {
  return (
    <Layout>
      <SliderSection />

      <NewContainer>
        <ServiceSection />
      </NewContainer>

      <NewContainer>
        <VideoSection url="https://www.youtube.com/watch?v=mrobdVDb8B4" />
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
