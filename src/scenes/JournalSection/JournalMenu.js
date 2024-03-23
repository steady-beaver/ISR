import Image from 'next/image';
import styles from './JournalMenu.module.scss';

const JournalMenu = ({ recentThreePosts, option, setOption }) => {
  return (
    <div className={styles.main}>
      {recentThreePosts.map((post, i) => (
        <div
          key={i}
          className={`${styles.option} ${i + 1 == option ? styles.selected : styles.notSelected}`}
          onClick={() => setOption(i + 1 + '')}
        >
          <div className={styles.numeric}>{`0${i + 1}`}</div>
          <div className={styles.preview}>
            <div className={styles.smallImgFrame}>
              <Image
                className={styles.smallImg}
                src={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl}
                fill={true}
                alt="Alt TODO"
              />
            </div>
            <div className={styles.textSide}>
              <div className={`${styles.categories} subtitleTiny `}>
                {post.categories.nodes.map((cat, i) => (
                  <span key={i} className={styles.categorySpan}>{`${cat.name}`}</span>
                ))}
              </div>
              <h3 className={`${styles.title} headingH3 `}>STORY OF ALGAVRE</h3>
              <div className={`${''} subtitleTiny`}>25.05.2023</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalMenu;
