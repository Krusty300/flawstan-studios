import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Projects",
    links: [
      { 
        title: "E-Commerce Platform", 
        href: "/work/ecommerce"  // Updated to match your work route
      },
      { 
        title: "Portfolio Website", 
        href: "/work/portfolio" 
      },
      { 
        title: "Task Management App", 
        href: "/work/task-app" 
      },
      { 
        title: "Weather Dashboard", 
        href: "/work/weather" 
      },
      { 
        title: "Social Media App", 
        href: "/work/social" 
      },
      { 
        title: "Analytics Dashboard", 
        href: "/work/analytics" 
      },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { title: "About", href: "/about" },
      { title: "Skills", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
