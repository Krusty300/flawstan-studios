export const articles = [
  {
    slug: "building-modern-web-apps-nextjs",
    title: "Building Modern Web Applications with Next.js",
    date: "March 15, 2024",
    category: "Development",
    readTime: "8 min read",
    excerpt: "Next.js has revolutionized the way we build web applications. With its powerful features like server-side rendering, static site generation, and API routes, it provides everything needed to create performant and scalable applications.",
    content: `
      <p>Next.js has revolutionized the way we build web applications...</p>
      <!-- Full content here -->
    `
  },
  // ... all your articles
];

export const categories = ["All", ...new Set(articles.map(article => article.category))];