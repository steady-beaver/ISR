import Container from 'components/Container';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import Section from 'components/Section';
import TestimonialSection from 'scenes/TestimonialSection/TestimonialSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <TestimonialSection />
      </NewContainer>

      <Section>
        <Container>Services</Container>
      </Section>
    </Layout>
  );
}
