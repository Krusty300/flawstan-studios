import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    slug: "ecommerce",
    description: "Full-stack e-commerce solution with payment integration",
    fullDescription: "A complete e-commerce platform built with React, Node.js, and Stripe. Features include product management, shopping cart, secure payment processing, order tracking, and admin dashboard.",
    tags: ["React", "Node.js", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    description: "Modern portfolio with animations and responsive design",
    fullDescription: "A stunning portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, dark mode, and seamless navigation.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
  },
  {
    title: "Task Management App",
    slug: "task-app",
    description: "Collaborative task management with real-time updates",
    fullDescription: "A real-time task management application with Firebase integration. Features include task creation, assignment, status tracking, team collaboration, and push notifications.",
    tags: ["React", "Firebase", "TypeScript"],
    github: "https://github.com/yourusername/task-management-app",
    liveUrl: "https://task-app-demo.com",
  },
  {
    title: "Weather Dashboard",
    slug: "weather",
    description: "Beautiful weather app with location-based forecasts",
    fullDescription: "An elegant weather dashboard that provides real-time weather data, 7-day forecasts, interactive charts, and location-based updates using a weather API.",
    tags: ["Vue.js", "API Integration", "Chart.js"],
    github: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
  },
  {
    title: "Social Media App",
    slug: "social",
    description: "Full-featured social platform with messaging",
    fullDescription: "A complete social media platform built with React Native and Firebase. Features include user profiles, real-time messaging, posts, likes, comments, and push notifications.",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/yourusername/social-media-app",
    liveUrl: "https://social-app-demo.com",
  },
  {
    title: "Analytics Dashboard",
    slug: "analytics",
    description: "Data visualization dashboard for business metrics",
    fullDescription: "A comprehensive analytics dashboard with interactive data visualizations. Features real-time metrics, custom reports, data filtering, and export capabilities using D3.js.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    github: "https://github.com/yourusername/analytics-dashboard",
    liveUrl: "https://analytics-demo.com",
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow="Project"
        title={project.title}
      >
        <p>{project.fullDescription}</p>
      </PageIntro>
      
      <Container className="mt-16">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h3 className="font-display text-sm font-semibold text-neutral-950">
              Technologies Used
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub and Live Demo Links */}
          <div className="mb-8 flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                <FaGithub className="h-4 w-4" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
          
          <div className="mt-8">
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              Back to all projects
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}