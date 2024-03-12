import Container from 'components/Container';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import Section from 'components/Section';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Services"
          title="For you"
          text="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. "
        />
      </NewContainer>

      <Section>
        <Container>Services</Container>
      </Section>
    </Layout>
  );
}
