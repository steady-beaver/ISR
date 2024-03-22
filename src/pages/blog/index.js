import ArticlePreview from 'components/ArticlePreview/ArticlePreview';
import CategoryBar from 'components/CategoryBar/CategoryBar';
import Layout from 'components/Layout';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import NewContainer from 'components/NewContainer/NewContainer';
import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import { getAllCategories, getPostsSegment } from 'lib/ola-blog';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './BlogHome.module.scss';

const BlogHome = ({ posts, allCategories }) => {
  const [firstPost, ...rest] = posts.nodes;
  const [lastPost] = useState(firstPost); //just first post
  const [restPosts, setRestPosts] = useState({ nodes: rest, pageInfo: posts.pageInfo }); // rest posts and pageInfo

  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <h1 className={` ${styles.heading} headingH1 uppercase centered`}>Journal</h1>
          <CategoryBar allCategories={allCategories} />

          {/* TODO separate component */}
          <div className={styles.highlightBlog}>
            <div className={styles.textCol}>
              <div>
                <h2 className={`${styles.title} headingH2 uppercase`}>
                  <Link href={`/blog/${lastPost.slug}`}>{lastPost.title}</Link>
                </h2>
                <div className={`${styles.details} subtitleTiny uppercase`}>
                  {lastPost?.categories?.nodes.map((categoryObj, i) => (
                    <span key={i} className={`${styles.category}`}>
                      {categoryObj.name}
                    </span>
                  ))}
                  <span>{lastPost.date}</span>
                </div>
              </div>
              <div
                className={`${styles.excerpt} textS`}
                dangerouslySetInnerHTML={{
                  __html: lastPost.excerpt,
                }}
              />

              <div>
                <ReadMoreBtn to={`/blog/${lastPost.slug}`} />
              </div>
            </div>

            <div className={`${styles.imageFrame}`}>
              <Link href={`/blog/${lastPost.slug}`}>
                <Image
                  src={`${process.env.WORDPRESS_UPLOADS_URL + '/' + lastPost.featuredImage.node.mediaDetails.file}`}
                  alt="Wedding"
                  fill={true}
                  className={`${styles.primaryFrame} objectCover imgShadow`}
                />
                <Image
                  src={'/ornaments/grass-ornament.svg'}
                  alt="Grass ornament"
                  width={45}
                  height={60}
                  className={styles.grassOrnament}
                />
                <Image
                  src={'/ornaments/old-postcard.png'}
                  alt="Old postcard ornament"
                  fill={true}
                  className={styles.postcardBack}
                />
              </Link>
            </div>
          </div>

          <div className={styles.wrapper}>
            {restPosts.nodes.map((item, i) => {
              return (
                <ArticlePreview
                  key={i}
                  primaryImgSrc={item.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                  srcSet={item.featuredImage.node.srcSet}
                  categories={item.categories.nodes}
                  date={item.date}
                  title={item.title}
                  excerpt={item.excerpt}
                  slug={item.slug}
                  link={'/blog/' + item.slug}
                />
              );
            })}
          </div>
          <LoadMoreBtn restPosts={restPosts} setRestPosts={setRestPosts} />
        </div>
      </NewContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  const allBlogPosts = await getPostsSegment();
  const allCategories = await getAllCategories();
  return {
    props: {
      posts: allBlogPosts,
      allCategories,
    },
  };
}

export default BlogHome;
