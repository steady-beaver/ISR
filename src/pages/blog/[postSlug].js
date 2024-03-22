import BackToJournalBtn from 'components/BackToJournalBtn/BackToJournalBtn';
import Date from 'components/Date/Date';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import PersonalWidget from 'components/PersonalWidget/PersonalWidget';
import { getPostSlugs, getSinglePost } from 'lib/ola-blog';
import styles from './Post.module.scss';

export const getStaticProps = async ({ params }) => {
  const postData = await getSinglePost(params.postSlug);

  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths = async () => {
  const slugsArr = await getPostSlugs();

  return {
    paths: slugsArr.map((item) => ({
      params: {
        postSlug: item.slug,
      },
    })),
    fallback: false,
  };
};

const BlogArticle = ({ postData }) => {
  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <div className={styles.header}>
            <BackToJournalBtn />
            <h1 className={`headingH1 ${styles.title}`}>{postData.title}</h1>
            <div className={`${styles.details} subtitleTiny uppercase`}>
              {postData?.categories?.edges.map((item, i) => (
                <span key={i} className={`${styles.category}`}>
                  {item.node.name}
                </span>
              ))}
              <Date>{postData.date}</Date>
            </div>
            <div
              className={`${styles.excerpt} headingH3 centered`}
              dangerouslySetInnerHTML={{
                __html: postData.excerpt,
              }}
            />
            <img src={postData.featuredImage.node.link} alt="Featured image" />
          </div>

          <div
            className={`wpBlog`}
            dangerouslySetInnerHTML={{
              __html: postData.content,
            }}
          />
        </div>
      </NewContainer>

      <NewContainer>
        <PersonalWidget />
      </NewContainer>
    </Layout>
  );
};

export default BlogArticle;
