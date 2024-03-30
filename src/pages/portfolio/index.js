import ArticlePreview from 'components/ArticlePreview/ArticlePreview';
import Layout from 'components/Layout';
import LoadMoreSessionsBtn from 'components/LoadMoreSessionsBtn/LoadMoreSessionsBtn';
import NewContainer from 'components/NewContainer/NewContainer';
import { getSessionsSegment } from 'lib/ola-blog';
import { useState } from 'react';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
import styles from './Portfolio.module.scss';

export async function getStaticProps() {
  const initialSessionsData = await getSessionsSegment();
  return {
    props: {
      initialSessionsData,
    },
  };
}

const Portfolio = ({ initialSessionsData }) => {
  const [sessions, setSessions] = useState(initialSessionsData);

  console.log('seSSions: ', sessions);

  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Portfolio "
          title="Stories"
          text="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. "
        />
        <div className={styles.main}>
          <div className={styles.wrapper}>
            {sessions.nodes.map((item) => {
              return (
                <ArticlePreview
                  key={item.slug}
                  primaryImgSrc={
                    item?.featuredImage?.node?.mediaDetails?.sizes?.[0]?.sourceUrl ??
                    item?.featuredImage?.node?.sourceUrl
                  }
                  categories={item?.sessionConfigs?.sessionType?.nodes ?? []}
                  date={item.date}
                  title={item.title}
                  link={'/portfolio/' + item.slug}
                />
              );
            })}
          </div>
          <LoadMoreSessionsBtn sessions={sessions} setSessions={setSessions} />
        </div>
      </NewContainer>
    </Layout>
  );
};

export default Portfolio;
