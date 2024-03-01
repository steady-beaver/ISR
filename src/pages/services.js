import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Section from 'components/Section';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1>Services</h1>
      </Header>

      <Section>
        <Container>Services</Container>
      </Section>
    </Layout>
  );
}
