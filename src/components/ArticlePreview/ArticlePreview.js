import Link from 'next/link';
import styles from './ArticlePreview.module.scss';

// type categoriesT = {
//   name: string,
//   slug: string,
// }[];

const ArticlePreview = ({
  primaryImgSrc = '/pictures/article-preview.jpeg',
  srcSet,
  categories,
  date,
  title,
  excerpt,
  link,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.imgFrame}>
        <Link href={link}>
          <img
            src={primaryImgSrc}
            srcSet={srcSet}
            sizes="(max-width: 800px) 950vw, 50vw"
            className={styles.primaryImg}
            alt="Article preview thumbnail"
          />
        </Link>
      </div>
      <div>
        <h2 className={`${styles.title} headingH2 uppercase`}>{title}</h2>
        <div className={`${styles.details} subtitleTiny uppercase`}>
          {categories?.map((categoryObj, i) => (
            <span key={i} className={`${styles.category}`}>
              {categoryObj.name}
            </span>
          ))}
          <span>{date}</span>
        </div>
      </div>
      <div
        className={`${styles.excerpt} text`}
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <div>
        <Link href={link}>
          <span className={`${styles.articleLink} textS regular uppercase letterSpacing`}>Read more</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
