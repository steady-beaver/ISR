import { getPaginatedPosts } from 'lib/posts';

import TemplateArchive from 'templates/archive';

export default function Posts({ posts, pagination }) {
  const title = 'All Posts';
  const slug = 'posts';

  return <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} />;
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
