import FullWidthImage from 'components/FullWidthImage/FullWidthImage';
import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import ParagraphsWP from 'components/ParagraphsWP/ParagraphsWP';
import { getSessionSlugs, getSingleSession } from 'lib/ola-blog';
import OctagonSection from 'scenes/OctagonSection/OctagonSection';
import PersonalSection from 'scenes/PersonalSection/PersonalSection';
import SquareSection from 'scenes/SquareSection/SquareSection';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
import TestimonialSectionNew from 'scenes/TestimonialSectionNew/TestimonialSectionNew';
import styles from './Session.module.scss';

export const getStaticPaths = async () => {
  const slugsArr = await getSessionSlugs();

  return {
    paths: slugsArr.map((item) => ({
      params: {
        sessionSlug: item.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const session = await getSingleSession(params.sessionSlug);
  return {
    props: {
      session,
    },
  };
};

const Session = ({ session }) => {
  console.log('session: ', session);

  return (
    <Layout>
      <NewContainer>
        <div className={styles.main}>
          <StandardHeaderSection
            subtitle={session?.main?.sessionType?.nodes?.[0]?.name ?? 'Category'}
            title={session?.title}
            text={session.main.description}
          />

          <FullWidthImage imageNode={session.featuredImage.node} className={styles.topImage} />

          {/* ОCTAGON */}
          <OctagonSection data={session.octagon} />

          <FullWidthImage imageNode={session.middleBigImage.middleFullWidthImage.node} />

          <TestimonialSectionNew
            title={session?.testimonial?.testimonialHeading}
            content={<ParagraphsWP longText={session?.testimonial?.content} />}
            name={session?.testimonial?.name}
          />

          <SquareSection data={session.square} />

          <FullWidthImage imageNode={session.lastBigImage.lastFullWidthImage.node} />
        </div>

        {/* GALLERY */}

        <PersonalSection />
      </NewContainer>
    </Layout>
  );
};

export default Session;
