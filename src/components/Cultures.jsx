import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My interests"
        title="Beyond the code"
        invert
      >
        <p>
          When I am not coding, here is what keeps me inspired and balanced.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Learning" invert>
            I am constantly exploring new technologies, frameworks, and best
            practices to stay at the cutting edge of web development.
          </GridListItem>
          <GridListItem title="Design" invert>
            I have a deep appreciation for great UI/UX design and love
            experimenting with new design tools and trends.
          </GridListItem>
          <GridListItem title="Community" invert>
            I enjoy contributing to open source projects and sharing knowledge
            with the developer community through writing and mentoring.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
