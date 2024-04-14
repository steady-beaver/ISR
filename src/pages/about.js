import Layout from 'components/Layout';
import NewContainer from 'components/NewContainer/NewContainer';
import AllThatMattersSection from 'scenes/AllThatMattersSection/AllThatMattersSection';
import OldSchoolTimeline from 'scenes/OldSchoolTimeline/OldSchoolTimeline';
import PersonalSection from 'scenes/PersonalSection/PersonalSection';
import QuatroSectionVarB from 'scenes/QuatroSectionVarB/QuatroSectionVarB';
import StandardHeaderSection from 'scenes/StandardHeaderSection/StandardHeaderSection';
// import Episode from 'scenes/TimelineSection/Episode';
// import TimelineSection from 'scenes/TimelineSection/TimelineSection';
import VideoSection from 'scenes/VideoSection/VideoSection';

export default function Home() {
  return (
    <Layout>
      <NewContainer>
        <StandardHeaderSection
          subtitle="About me"
          title="Hi, I'm Ola"
          text="A photographer who adores coffee, traveling, nature, sunsets, draws inspiration from music, loves yoga, and can spend hours gazing at the ocean."
        />

        <VideoSection url="https://www.youtube.com/watch?v=ALqe9SiF78I" />

        {/* <TimelineSection>
          <Episode
            image="/pictures/about-me/about-me-1.jpg"
            year="2002"
            text="I invested all my savings in a Mamiya analog camera. My dad, a photography enthusiast himself, passed down his knowledge of camera settings to me. Since then, I've been spending all my money on film rolls and setting up a darkroom under my desk."
          />
          <Episode
            year="2007"
            text="Dropping out of my tourism studies to apply to a photography school on the same day, I've been immersed in the world of photography ever since. Meeting beautiful people along the way, I started working as a photography teacher a year later."
          />
          <Episode
            image="/pictures/about-me/about-me-3.jpg"
            year="2017"
            text="After many travels, we pause for a moment to welcome our children into the world. Portugal holds special significance for us, which is why we decide to have an elopement wedding with our children running around us."
          />
          <Episode
            image="/pictures/about-me/about-me-4.jpg"
            year="2018"
            text="Exactly one year later, with our car packed to the ceiling, we left Poland and moved to Portugal. I left my photography studio behind in Poland to start afresh. Since then, I've been immersed in wedding photography in Portugal, and I wouldn't have it any other way."
          />
        </TimelineSection> */}

        <OldSchoolTimeline />

        <QuatroSectionVarB
          header="Portugal"
          title="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus."
          p1="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          p2="Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerisque netus. Odio leo turpis non nunc ornare varius fusce et. Lorem ipsum dolor sit amet consectetur. Urna convallis leo scelerissque netus."
          srcPrimary="/pictures/portugal-1.jpg"
          srcSecondary="/pictures/portugal-2.jpg"
        />
      </NewContainer>

      <NewContainer>
        <AllThatMattersSection
          primaryImg="/pictures/matters/matters-2.jpg"
          secondaryImg="/pictures/matters/matters-1.jpg"
          thirdImg="/pictures/matters/matters-3.jpg"
        />
      </NewContainer>

      <NewContainer>
        <PersonalSection />
      </NewContainer>
    </Layout>
  );
}
