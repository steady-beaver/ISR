import Container from 'components/Container';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import Section from 'components/Section';
import IntroductionSection from 'scenes/IntroductionSection/IntroductionSection';
import ServiceSection from 'scenes/ServiceSection/ServiceSection';
import TestimonialSection from 'scenes/TestimonialSection/TestimonialSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <ServiceSection />
      </NewContainer>

      <NewContainer>
        <IntroductionSection />
      </NewContainer>

      <NewContainer>
        <TestimonialSection />
      </NewContainer>

      <Section>
        <Container>Holla Home</Container>
      </Section>
    </Layout>
  );
}
