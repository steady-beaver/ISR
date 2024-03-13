import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import QuatroSectionVarA from 'scenes/QuatroSectionVarA/QuatroSectionVarA';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
import TestimonialSection from 'scenes/TestimonialSection/TestimonialSection';
import TravelSection from 'scenes/TravelSection/TravelSection';
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
        <TravelSection primaryImg="/pictures/travel/travel-1.jpg" secondaryImg="/pictures/travel/travel-2.jpg" />
        {/* <TravelSection primaryImg="/pictures/travel/travel-1.jpg" secondaryImg="/pictures/travel/travel-2.jpg" /> */}
      </NewContainer>

      <NewContainer>
        <TestimonialSection />
      </NewContainer>
    </Layout>
  );
}
