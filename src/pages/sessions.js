import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Section from 'components/Section';

export default function Sessions() {
  return (
    <Layout>
      <Header>
        <h1>Sessions</h1>
      </Header>

      <Section>
        <Container>Sessions</Container>
      </Section>
    </Layout>
  );
}
