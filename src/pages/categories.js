import Link from 'next/link';

import { categoryPathBySlug, getAllCategories } from 'lib/categories';

import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

import styles from 'styles/pages/Categories.module.scss';

export default function Categories({ categories }) {
  return (
    <Layout>
      <Header>
        <Container>
          <h1>Categories</h1>
        </Container>
      </Header>

      <Section>
        <Container>
          <SectionTitle>All Categories</SectionTitle>
          <ul className={styles.categories}>
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <Link href={categoryPathBySlug(category.slug)}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { categories } = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
}
