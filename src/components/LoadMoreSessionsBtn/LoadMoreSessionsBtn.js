import { getSessionsSegment } from 'lib/ola-blog';
import styles from './LoadMoreSessionsBtn.module.scss';

const LoadMoreSessionsBtn = ({ className, sessions, setSessions }) => {
  const handleClick = async () => {
    const nextSessionsSegment = await getSessionsSegment(sessions.pageInfo.endCursor.toString());

    const newSessionsObj = {
      pageInfo: { ...nextSessionsSegment.pageInfo },
      nodes: [...nextSessionsSegment.nodes, ...sessions.nodes],
    };

    setSessions(newSessionsObj);
  };

  const areMorePages = sessions.pageInfo.hasNextPage;

  return (
    <div className={styles.main}>
      <span
        className={`${styles.wrapper} ${className} ${areMorePages ? null : styles.disabled}`}
        onClick={() => {
          if (areMorePages) return handleClick();
        }}
      >
        <span className={`${styles.btn} subtitleSmall`}>{areMorePages ? 'More sessions' : 'No more sessions'}</span>
      </span>
    </div>
  );
};

export default LoadMoreSessionsBtn;
