import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About" title="About me">
        <p>
          I am a passionate developer and designer who loves creating beautiful,
          functional digital experiences.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            I started my journey in web development several years ago and have
            been honing my skills ever since. I love learning new technologies
            and tackling challenging projects.
          </p>
          <p>
            When I am not coding, you can find me exploring new design trends,
            contributing to open source projects, or enjoying the outdoors.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="4+" label="Years experience" />
          <StatListItem value="20+" label="Projects completed" />
          <StatListItem value="100%" label="Client satisfaction" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
