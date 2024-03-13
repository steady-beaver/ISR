import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import QuatroSectionVarA from 'scenes/QuatroSectionVarA/QuatroSectionVarA';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="Services"
          title="For you"
          text="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. "
        />
      </NewContainer>

      <NewContainer>
        <QuatroSectionVarA
          header="Couple"
          title="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus."
          p1="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          p2="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          srcPrimary="/pictures/couple-primary.jpg"
          srcSecondary="/pictures/couple-secondary.jpg"
        />
      </NewContainer>
    </Layout>
  );
}
