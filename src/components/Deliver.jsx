import React from "react";
import Section from "./Section";
import List, { ListItem } from "./List";
import portfolioImage from "@/images/portfolio.png";

const Deliver = () => {
  return (
    <Section title="Tools & Workflow" image={{ src: portfolioImage, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I use a modern toolkit and efficient workflow to deliver high-quality
          projects on time. My development process emphasizes code quality,
          testing, and continuous integration.
        </p>
        <p>
          I am experienced with version control, collaborative development tools,
          and deployment pipelines. This ensures smooth project management and
          reliable delivery of production-ready applications.
        </p>
        <p>
          My workflow is designed to be adaptable to different project requirements
          while maintaining consistency and quality across all deliverables.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Development Tools
      </h3>
      <List>
        <ListItem title="Version Control">
          Git, GitHub, GitLab for collaborative development and code management.
        </ListItem>
        <ListItem title="Testing">
          Jest, Cypress, and testing-library for unit and integration testing.
        </ListItem>
        <ListItem title="Deployment">
          Vercel, Netlify, Docker, and CI/CD pipelines for automated deployments.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
