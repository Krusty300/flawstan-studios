import React from "react";
import Section from "./Section";
import { TagList, TagListItem } from "./TagList";
import imageFile from "@/images/image.png"; // Import the image

const Discover = () => {
  return (
    <Section title="Frontend Development" image={{ src: imageFile, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I specialize in creating beautiful, responsive, and performant user
          interfaces using modern{" "}
          <strong className="font-semibold text-neutral-950">Frontend</strong>{" "}
          technologies and frameworks.
        </p>
        <p>
          My approach to frontend development focuses on clean code, accessibility,
          and exceptional user experiences. I stay current with the latest
          best practices in React ecosystem and modern CSS frameworks.
        </p>
        <p>
          I believe that great frontend development is about more than just making
          things look good — it is about creating intuitive, fast, and accessible
          experiences that users love.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Technologies & Tools
      </h3>
      <TagList className="mt-4">
        <TagListItem>React</TagListItem>
        <TagListItem>Next.js</TagListItem>
        <TagListItem>TypeScript</TagListItem>
        <TagListItem>Tailwind CSS</TagListItem>
        <TagListItem>Framer Motion</TagListItem>
        <TagListItem>Vue.js</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;