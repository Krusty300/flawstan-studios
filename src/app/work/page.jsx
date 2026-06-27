import PageIntro from "@/components/PageIntro";
import Clients from "@/components/Clients";
import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Featured projects and work."
      >
        <p>
          Here are some of the projects I have worked on. Each project represents
          a unique challenge and an opportunity to create something meaningful.
        </p>
      </PageIntro>
      <Clients />
    </>
  );
};

export default WorkPage;
