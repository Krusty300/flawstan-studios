import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    slug: "ecommerce",
    description: "Full-stack e-commerce solution with payment integration",
    tags: ["React", "Node.js", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    description: "Modern portfolio with animations and responsive design",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Management App",
    slug: "task-app",
    description: "Collaborative task management with real-time updates",
    tags: ["React", "Firebase", "TypeScript"],
    github: "https://github.com/yourusername/task-management-app",
  },
  {
    title: "Weather Dashboard",
    slug: "weather",
    description: "Beautiful weather app with location-based forecasts",
    tags: ["Vue.js", "API Integration", "Chart.js"],
    github: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Social Media App",
    slug: "social",
    description: "Full-featured social platform with messaging",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/social-media-app",
  },
  {
    title: "Analytics Dashboard",
    slug: "analytics",
    description: "Data visualization dashboard for business metrics",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    github: "https://github.com/yourusername/analytics-dashboard",
  },
];

const Clients = () => {
  return (
    <div className="mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Featured Projects
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div className="border border-neutral-800 bg-neutral-900 p-6 transition hover:border-neutral-600">
                  <div className="flex items-start justify-between">
                    <Link href={`/work/${project.slug}`} className="flex-1">
                      <h3 className="font-display text-lg font-semibold text-white group-hover:text-neutral-300">
                        {project.title}
                      </h3>
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-neutral-500 transition hover:text-white"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-neutral-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-neutral-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInStagger>
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center text-sm font-medium text-white hover:text-neutral-300"
          >
            See all projects
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Clients;