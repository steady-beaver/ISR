import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import Section from 'components/Section';
import ServiceSection from 'scenes/ServiceSection/ServiceSection';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />
      <Header>
        <h1>Home</h1>
      </Header>

      <NewContainer>
        <ServiceSection />
      </NewContainer>

      <Section>
        <Container>Holla Home</Container>
      </Section>
    </Layout>
  );
}
