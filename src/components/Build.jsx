import React from "react";
import Section from "./Section";
import Blockquote from "./Blockquote";
import imageFile from "@/images/image.png"; // Import the image

const Build = () => {
  return (
    <Section title="Backend Development" image={{ src: imageFile, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I build robust and scalable backend systems that power modern web
          applications. From RESTful APIs to real-time services, I create the
          infrastructure that makes applications work seamlessly.
        </p>
        <p>
          My backend expertise includes database design, authentication systems,
          and cloud infrastructure. I focus on security, performance, and
          scalability to ensure applications can grow with user demand.
        </p>
        <p>
          I have experience working with various databases and cloud platforms,
          allowing me to choose the right tools for each project&apos;s specific needs.
        </p>
      </div>
      <Blockquote
        author={{ name: "Jjamirr Eric (Flawstan) ", role: "Full-Stack Developer" }}
        className="mt-12"
      >
        Building great backend systems is about more than just storing data &mdash; it is
        about creating the foundation for exceptional user experiences.
      </Blockquote>
    </Section>
  );
};

export default Build;
