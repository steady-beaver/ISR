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

// ===============   SESSIONS ===============

export async function getSessionsSegment(endCursor = null) {
  const condition = `where: {orderby: {field: DATE, order: DESC}}, after: "${endCursor}", first: 5`;

  const sessionsSegmentQuery = gql`
    query getSessionsSegment {
      sessions(${condition}) {
        nodes {
          title
          uri
          status
          slug
          date
          featuredImage {
            node {
              mediaItemUrl
              sizes
              srcSet
              sourceUrl
              mediaDetails {
                sizes {
                  width
                  fileSize
                  sourceUrl
                }
              }
            }
          }
          main {
            order
            sessionType {
              nodes {
                name
                slug
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: sessionsSegmentQuery });
  const sessionsSegmentData = res.data.sessions;

  return sessionsSegmentData;
}

export async function getSessionSlugs() {
  const slugsQuery = gql`
    query getSessionSlugs {
      sessions {
        nodes {
          slug
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: slugsQuery });
  const slugsArr = res.data.sessions.nodes;

  return slugsArr;
}

export async function getSingleSession(slug) {
  const singleSessionQuery = gql`
    query getSingleSession {
      session(idType: SLUG, id: "${slug}") {
        id
        date
        featuredImage {
          node {
            altText
            srcSet
            sourceUrl
            caption
          }
        }
        slug
        main {
          description
          order
          sessionType {
            nodes {
              name
              slug
            }
          }
        }
        square {
          text
          squareSectionHeading
          imageA {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          imageB {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          imageC {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
        }
        testimonial {
          testimonialHeading
          content
          name
        }
        title
        middleBigImage {
          middleFullWidthImage {
            node {
              altText
              sourceUrl
              srcSet
              caption
            }
          }
        }
        lastBigImage {
          lastFullWidthImage {
            node {
              altText
              caption
              srcSet
              sourceUrl
            }
          }
        }
        octagon {
          rightText
          rightTitle
          leftText
          leftTitle
          leftEndImage {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          leftMiddleImage {
            node {
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          leftTopImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightEndImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightMiddleImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
          rightTopImage {
            node{
              altText
              srcSet
              sourceUrl
              caption
            }
          }
        }
      }
    }
  `;

  const apolloClient = getApolloClient();
  const res = await apolloClient.query({ query: singleSessionQuery });
  const session = res.data.session;

  return session;
}
