import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import List, { ListItem } from "./List";
import imageFile from "@/images/dev image.png"; // Import the new image

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="What I do"
        title="I help bring ideas to life through design and code."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I focus on creating clean, functional, and beautiful digital experiences
          that solve real problems and delight users.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageFile}
                width={800}
                height={600}
                alt="Portfolio showcase"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              I create responsive, performant websites using modern frameworks
              like React, Next.js, and Tailwind CSS.
            </ListItem>
            <ListItem title="UI/UX design">
              I design intuitive interfaces and user experiences that are both
              beautiful and functional.
            </ListItem>
            <ListItem title="Full-stack development">
              I build complete web applications from front-end to back-end,
              handling everything from databases to APIs.
            </ListItem>
            <ListItem title="Mobile development">
              I develop cross-platform mobile applications using React Native
              and other modern frameworks.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;