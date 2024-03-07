import Container from 'components/Container';
import Header from 'components/Header';
import Layout from 'components/Layout';
import Pagination from 'components/Pagination/Pagination';
import PostCard from 'components/PostCard';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

import styles from 'styles/templates/Archive.module.scss';

const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
  title = 'Archive',
  Title,
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  metadata = { description: 'TO DO DESCRIPTION' },
  pagination,
}) {
  return (
    <Layout>
      <Header>
        <Container>
          <h1>{Title || title}</h1>
          {metadata.description && (
            <p
              className={styles.archiveDescription}
              dangerouslySetInnerHTML={{
                __html: metadata.description,
              }}
            />
          )}
        </Container>
      </Header>

      <Section>
        <Container>
          <SectionTitle>Posts</SectionTitle>
          {Array.isArray(posts) && (
            <>
              <ul className={styles.posts}>
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
              {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
            </>
          )}
        </Container>
      </Section>
    </Layout>
  );
}
