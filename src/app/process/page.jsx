import ContactSection from "@/components/ContactSection";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import Discover from "@/components/Discover";
import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Skills" title="My skills and expertise">
        <p>
          Here are the skills and technologies I work with to bring ideas to life.
          I am constantly learning and expanding my toolkit.
        </p>
      </PageIntro>
      
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Frontend Development */}
        <Discover />
        {/* Backend Development */}
        <Build />
        {/* Tools & Workflow */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
