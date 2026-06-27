import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="My principles"
        title="What guides my work"
      >
        <p>
          These are the core principles that guide how I approach every project
          and collaboration.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Quality">
            I believe in delivering clean, maintainable code and polished user
            experiences that stand the test of time.
          </GridListItem>
          <GridListItem title="Communication">
            Clear and consistent communication is key to successful projects.
            I keep stakeholders informed and involved throughout the process.
          </GridListItem>
          <GridListItem title="Continuous Learning">
            Technology evolves rapidly, and I am committed to continuous learning
            to bring the best solutions to every project.
          </GridListItem>
          <GridListItem title="User-Centric">
            Every decision I make considers the end-user experience. I build
            products that solve real problems for real people.
          </GridListItem>
          <GridListItem title="Collaboration">
            I enjoy working with teams and clients who value collaboration and
            are passionate about creating great products together.
          </GridListItem>
          <GridListItem title="Integrity">
            I am honest about timelines, challenges, and possibilities. Building
            trust through transparency is essential to long-term success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
