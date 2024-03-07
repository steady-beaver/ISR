import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Section from 'components/Section';

export default function Home() {
  return (
    <Layout>
      <Header>
        <h1>About me</h1>
      </Header>

      <Section>
        <Container>About me</Container>
      </Section>
    </Layout>
  );
}
