import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import PersonalWidget from 'components/PersonalWidget/PersonalWidget';
import FaqSection from 'scenes/FaqSection/FaqSection';
import QuatroSectionVarA from 'scenes/QuatroSectionVarA/QuatroSectionVarA';
import QuatroSectionVarB from 'scenes/QuatroSectionVarB/QuatroSectionVarB';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
import TestimonialSection from 'scenes/TestimonialSection/TestimonialSection';
import TravelSection from 'scenes/TravelSection/TravelSection';
import TripleSection from 'scenes/TripleSection/TripleSection';
import VideoSection from 'scenes/VideoSection/VideoSection';

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

      <NewContainer>
        <VideoSection url="https://www.youtube.com/watch?v=gW6pa6bnyVU" />
      </NewContainer>

      <NewContainer>
        <TripleSection photoSrc="/pictures/service-wedding.jpg" />
      </NewContainer>

      <NewContainer>
        <TestimonialSection />
      </NewContainer>

      <NewContainer>
        <QuatroSectionVarB
          header="Elopement"
          title="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus."
          p1="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          p2="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          srcPrimary="/pictures/service-elopement-1.jpg"
          srcSecondary="/pictures/service-elopement-2.jpg"
        />
      </NewContainer>

      <NewContainer>
        <TravelSection primaryImg="/pictures/travel/travel-1.jpg" secondaryImg="/pictures/travel/travel-2.jpg" />
      </NewContainer>

      <NewContainer>
        <FaqSection />
      </NewContainer>

      <NewContainer>
        <PersonalWidget />
      </NewContainer>
    </Layout>
  );
}
