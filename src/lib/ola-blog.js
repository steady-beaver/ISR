import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';

export async function getPostsSegment(endCursor = null, categoryName = null) {
  let condition = `where: {orderby: {field: DATE, order: DESC}}, after: "${endCursor}", first: 5`;

  if (categoryName) {
    condition = `where: {orderby: {field: DATE, order: DESC}, categoryName: "${categoryName}"}, after: "${endCursor}", first: 5`;
  }

  const allBlogPostsQuery = gql`
    query getAllBlogPosts {
      posts(${condition}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          date
          excerpt(format: RENDERED)
          slug
          title
          link
          categories {
            nodes {
              name
              slug
            }
          },
          featuredImage {
            node {
              altText
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
                file
              }
              srcSet(size: MEDIUM_LARGE)
            }
          }
        }
      }
    }
  `;
  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: allBlogPostsQuery });
  const posts = res.data.posts;

  return posts;
}

export async function getSinglePost(slug) {
  const singlePostQuery = gql`
    query getSinglePost {
      post(idType: SLUG, id: "${slug}") {
        id
        slug
        title
        categories {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
        date
        featuredImage {
          node {
            altText
            link
            mediaDetails {
              file
              width
              sizes {
                file
                sourceUrl
                width
              }
            }
          }
        }
        content(format: RENDERED)
        excerpt(format: RENDERED)
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: singlePostQuery });
  const post = res.data.post;

  return post;
}

export async function getPostSlugs() {
  const slugsQuery = gql`
    query getPostSlugs {
      posts {
        nodes {
          slug
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.posts.nodes;

  return slugsArr;
}

export async function getAllCategories() {
  const slugsQuery = gql`
    query getAllCategories {
      categories {
        nodes {
          slug
          name
          count
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.categories.nodes;

  return slugsArr;
}
