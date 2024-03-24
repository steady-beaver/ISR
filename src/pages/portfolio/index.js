import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Services"
          title="For you"
          text="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. "
        />
        <div className={styles.main}>Portfolio</div>
      </NewContainer>
    </Layout>
  );
};

export default Portfolio;
