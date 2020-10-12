import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { getPosts } from 'lib/posts';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import PostCard from 'components/PostCard';

import searchIndex from 'public/wp-search.json';

import styles from 'styles/templates/Archive.module.scss';

export default function TemplateArchive({ title = 'Archive', posts }) {
  return (
    <Layout>
      <Header>
        <h1>{title}</h1>
      </Header>

      <Section>
        <Container>
          <h2 className={styles.sectionTitle}>Posts</h2>
          <ul className={styles.posts}>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}