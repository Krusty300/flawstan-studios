"use client";

import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaTwitter, FaLinkedin, FaLink, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const articles = {
  "building-modern-web-apps-nextjs": {
    title: "Building Modern Web Applications with Next.js",
    date: "March 15, 2024",
    category: "Development",
    readTime: "8 min read",
    content: `
      <p>Next.js has revolutionized the way we build web applications. With its powerful features like server-side rendering, static site generation, and API routes, it provides everything needed to create performant and scalable applications.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js offers several advantages over traditional React applications:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Improves SEO and initial page load times</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time for optimal performance</li>
        <li><strong>API Routes:</strong> Build API endpoints without a separate backend</li>
        <li><strong>Automatic Code Splitting:</strong> Loads only the JavaScript needed for each page</li>
        <li><strong>Image Optimization:</strong> Automatic image optimization and serving</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>Setting up a Next.js project is straightforward with the create-next-app CLI:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This command sets up a new Next.js project with all the necessary configurations and dependencies.</p>
      
      <h2>Key Features to Explore</h2>
      <p>Once you have your project set up, here are some key features to explore:</p>
      <ul>
        <li><strong>File-based Routing:</strong> Create routes by adding files to the pages directory</li>
        <li><strong>Dynamic Routes:</strong> Create dynamic routes with bracket notation</li>
        <li><strong>Middleware:</strong> Run code before a request is completed</li>
        <li><strong>Environment Variables:</strong> Manage environment-specific configurations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a robust framework for building modern web applications. Its combination of performance, developer experience, and feature set makes it an excellent choice for both small projects and large-scale applications.</p>
    `
  },
  "art-of-clean-code": {
    title: "The Art of Clean Code: Best Practices",
    date: "February 28, 2024",
    category: "Best Practices",
    readTime: "6 min read",
    content: `
      <p>Clean code is not just about making your code look pretty—it's about writing code that is easy to understand, maintain, and extend. Clean code is a hallmark of professional software development.</p>
      
      <h2>Meaningful Names</h2>
      <p>One of the most important aspects of clean code is using meaningful names. Names should reveal intent, avoid disinformation, and make meaningful distinctions.</p>
      <ul>
        <li>Use intention-revealing names</li>
        <li>Avoid disinformation</li>
        <li>Make meaningful distinctions</li>
        <li>Use pronounceable names</li>
        <li>Use searchable names</li>
      </ul>
      
      <h2>Functions Should Be Small</h2>
      <p>Functions should do one thing and do it well. They should be small enough to understand at a glance. A good rule of thumb is that functions should rarely be longer than 20 lines.</p>
      
      <h2>Comments</h2>
      <p>Comments are often used as a crutch for poorly written code. Instead of adding comments to explain what your code does, focus on writing code that is self-documenting through clear naming and structure.</p>
      
      <h2>Error Handling</h2>
      <p>Proper error handling is essential for clean code. Use exceptions rather than return codes, and handle errors at the appropriate level of abstraction.</p>
      
      <h2>Conclusion</h2>
      <p>Writing clean code is a skill that takes practice and discipline. By following these principles, you can create code that is a joy to work with and easy to maintain.</p>
    `
  },
  "mastering-tailwind-css": {
    title: "Mastering Tailwind CSS for Rapid UI Development",
    date: "January 10, 2024",
    category: "Design",
    readTime: "7 min read",
    content: `
      <p>Tailwind CSS has transformed the way developers approach styling. Its utility-first philosophy allows for rapid UI development without leaving your HTML, while still maintaining consistency and design system adherence.</p>
      
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind CSS offers several compelling advantages:</p>
      <ul>
        <li><strong>Rapid Development:</strong> Build interfaces quickly without context switching</li>
        <li><strong>Consistency:</strong> Design system built into the framework</li>
        <li><strong>Small Bundle Size:</strong> Only includes the CSS you actually use</li>
        <li><strong>Customization:</strong> Highly configurable to match your design needs</li>
        <li><strong>Dark Mode:</strong> Built-in dark mode support</li>
      </ul>
      
      <h2>Core Concepts</h2>
      <p>Understanding Tailwind's core concepts is key to using it effectively:</p>
      <ul>
        <li><strong>Utility Classes:</strong> Single-purpose classes that do one thing</li>
        <li><strong>Responsive Design:</strong> Responsive prefixes like md:, lg:, xl:</li>
        <li><strong>State Variants:</strong> Hover, focus, active states with prefixes</li>
        <li><strong>Arbitrary Values:</strong> Use any value with square brackets</li>
      </ul>
      
      <h2>Best Practices</h2>
      <p>To get the most out of Tailwind CSS:</p>
      <ul>
        <li>Extract repeated patterns into components</li>
        <li>Use the @apply directive for common patterns</li>
        <li>Configure your theme in tailwind.config.js</li>
        <li>Use the JIT compiler for development</li>
        <li>Purge unused styles for production</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a powerful approach to styling that can significantly speed up development while maintaining design consistency. With practice, it becomes an invaluable tool in your development toolkit.</p>
    `
  },
  "typescript-tips": {
    title: "TypeScript Tips for Better Developer Experience",
    date: "December 5, 2023",
    category: "Development",
    readTime: "5 min read",
    content: `
      <p>TypeScript has become an essential tool for modern JavaScript development. It provides type safety, better IDE support, and improved code maintainability.</p>
      
      <h2>Type Inference</h2>
      <p>TypeScript's type inference is powerful. Let TypeScript infer types when possible rather than explicitly typing everything:</p>
      <pre><code>// Good - TypeScript infers the type
const message = "Hello World";

// Unnecessary - explicit typing when not needed
const message: string = "Hello World";</code></pre>
      
      <h2>Union Types</h2>
      <p>Union types allow you to specify that a variable can be one of several types:</p>
      <pre><code>type Status = "pending" | "in-progress" | "completed";</code></pre>
      
      <h2>Interfaces vs Types</h2>
      <p>Both interfaces and types have their use cases. Use interfaces for object shapes that might be extended, and types for unions, intersections, and more complex types.</p>
      
      <h2>Generics</h2>
      <p>Generics provide a way to create reusable components that work with a variety of types:</p>
      <pre><code>function identity<T>(arg: T): T {
  return arg;
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>TypeScript significantly improves the JavaScript development experience. By leveraging its type system effectively, you can catch errors early, improve code documentation, and make refactoring safer.</p>
    `
  },
  "building-accessible-web-apps": {
    title: "Building Accessible Web Applications",
    date: "November 20, 2023",
    category: "Accessibility",
    readTime: "6 min read",
    content: `
      <p>Web accessibility ensures that people with disabilities can use the web. It's not just the right thing to do—it also improves the experience for all users and can have legal implications.</p>
      
      <h2>WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide standards for web accessibility:</p>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable by users</li>
        <li><strong>Understandable:</strong> Information and operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough to be interpreted by assistive technologies</li>
      </ul>
      
      <h2>Key Accessibility Features</h2>
      <ul>
        <li><strong>Semantic HTML:</strong> Use proper HTML elements for their intended purpose</li>
        <li><strong>ARIA Attributes:</strong> Enhance accessibility where HTML falls short</li>
        <li><strong>Keyboard Navigation:</strong> Ensure all functionality is available via keyboard</li>
        <li><strong>Color Contrast:</strong> Maintain sufficient contrast ratios</li>
        <li><strong>Alt Text:</strong> Provide descriptive alt text for images</li>
      </ul>
      
      <h2>Testing Accessibility</h2>
      <p>Use tools like axe DevTools, Lighthouse, and screen readers to test your application's accessibility.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is essential for creating inclusive digital experiences. By following WCAG guidelines and testing with assistive technologies, you can ensure your application is usable by everyone.</p>
    `
  },
  "state-management-react": {
    title: "State Management in React: A Complete Guide",
    date: "October 8, 2023",
    category: "Development",
    readTime: "9 min read",
    content: `
      <p>State management is a fundamental concept in React applications. As applications grow, managing state becomes increasingly complex. Understanding different approaches to state management is crucial for building scalable applications.</p>
      
      <h2>Local Component State</h2>
      <p>For simple, isolated state, useState is often sufficient:</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h2>Context API</h2>
      <p>For state that needs to be shared across multiple components, the Context API provides a solution without prop drilling:</p>
      <pre><code>const ThemeContext = createContext();</code></pre>
      
      <h2>Redux</h2>
      <p>For complex applications with lots of state and interactions, Redux provides a predictable state container with a powerful ecosystem.</p>
      
      <h2>Zustand</h2>
      <p>Zustand is a modern, lightweight state management solution that's simpler than Redux but still powerful:</p>
      <pre><code>const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));</code></pre>
      
      <h2>Choosing the Right Solution</h2>
      <ul>
        <li><strong>useState:</strong> Simple, local component state</li>
        <li><strong>Context API:</strong> State shared across components</li>
        <li><strong>Redux:</strong> Complex applications with lots of state</li>
        <li><strong>Zustand:</strong> Simple, modern alternative to Redux</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Choosing the right state management solution depends on your application's complexity and requirements. Start simple and scale up as needed.</p>
    `
  },
  "career-growth-tips": {
    title: "Career Growth Tips for Developers",
    date: "September 15, 2023",
    category: "Career",
    readTime: "7 min read",
    content: `
      <p>Navigating your career as a developer can be challenging. Here are essential tips for career growth, skill development, and professional advancement in the tech industry.</p>
      
      <h2>Continuous Learning</h2>
      <p>The tech industry evolves rapidly. Stay relevant by:</p>
      <ul>
        <li>Following industry blogs and newsletters</li>
        <li>Taking online courses and certifications</li>
        <li>Attending conferences and meetups</li>
        <li>Contributing to open source projects</li>
        <li>Building side projects to experiment with new technologies</li>
      </ul>
      
      <h2>Networking</h2>
      <p>Building a strong professional network can open doors to new opportunities:</p>
      <ul>
        <li>Connect with other developers on LinkedIn</li>
        <li>Participate in developer communities</li>
        <li>Attend local tech events</li>
        <li>Find a mentor or become one</li>
      </ul>
      
      <h2>Personal Branding</h2>
      <p>Establish yourself as a thought leader:</p>
      <ul>
        <li>Write blog posts and tutorials</li>
        <li>Speak at conferences and meetups</li>
        <li>Share your knowledge on social media</li>
        <li>Build a portfolio of your work</li>
      </ul>
      
      <h2>Career Planning</h2>
      <p>Take charge of your career trajectory:</p>
      <ul>
        <li>Set clear career goals</li>
        <li>Seek feedback regularly</li>
        <li>Identify skill gaps and address them</li>
        <li>Consider mentorship opportunities</li>
        <li>Explore different career paths (senior, management, architect)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Your career growth is in your hands. By investing in learning, networking, and personal branding, you can build a rewarding career in technology.</p>
    `
  },
  "design-systems": {
    title: "Design Systems: Building for Scale",
    date: "August 20, 2023",
    category: "Design",
    readTime: "8 min read",
    content: `
      <p>Design systems are essential for maintaining consistency across products. Learn how to build and maintain effective design systems that scale.</p>
      
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, patterns, and guidelines that ensure consistency across a product or brand.</p>
      
      <h2>Components of a Design System</h2>
      <ul>
        <li><strong>Design Tokens:</strong> Colors, typography, spacing, and other atomic values</li>
        <li><strong>Components:</strong> Reusable UI elements like buttons, cards, and forms</li>
        <li><strong>Patterns:</strong> Common design patterns and layouts</li>
        <li><strong>Guidelines:</strong> Usage guidelines and best practices</li>
        <li><strong>Documentation:</strong> Living documentation for designers and developers</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Start small and iterate</li>
        <li>Ensure developer and designer collaboration</li>
        <li>Make it accessible by default</li>
        <li>Document everything</li>
        <li>Version control your system</li>
        <li>Get feedback and iterate</li>
      </ul>
      
      <h2>Tools for Design Systems</h2>
      <ul>
        <li>Figma for design</li>
        <li>Storybook for component development</li>
        <li>Tailwind CSS for styling</li>
        <li>Radix UI for accessible components</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Design systems are an investment that pays off in consistency, efficiency, and scale. Start small, involve your team, and iterate continuously.</p>
    `
  },
  "accessibility-best-practices": {
    title: "Accessibility Best Practices for Developers",
    date: "July 10, 2023",
    category: "Accessibility",
    readTime: "5 min read",
    content: `
      <p>Accessibility is not a feature—it's a fundamental requirement. Here are essential accessibility best practices for developers.</p>
      
      <h2>Semantic HTML</h2>
      <p>Use the right HTML element for the job:</p>
      <ul>
        <li>Use <code>&lt;button&gt;</code> for buttons, not <code>&lt;div&gt;</code></li>
        <li>Use <code>&lt;nav&gt;</code> for navigation</li>
        <li>Use <code>&lt;main&gt;</code> for main content</li>
        <li>Use <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code> appropriately</li>
      </ul>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure all interactive elements are keyboard accessible:</p>
      <ul>
        <li>All interactive elements should be focusable</li>
        <li>Use tabindex appropriately</li>
        <li>Provide visible focus indicators</li>
        <li>Handle keyboard events properly (Enter, Space, Escape)</li>
      </ul>
      
      <h2>ARIA Attributes</h2>
      <p>Use ARIA attributes to enhance accessibility:</p>
      <ul>
        <li>Use aria-label for elements without visible text</li>
        <li>Use aria-describedby for additional descriptions</li>
        <li>Use aria-expanded for toggle states</li>
        <li>Use role attributes when needed</li>
      </ul>
      
      <h2>Color Contrast</h2>
      <p>Maintain sufficient contrast ratios:</p>
      <ul>
        <li>WCAG 2.1 AA requires 4.5:1 for normal text</li>
        <li>Use tools like Color Contrast Checker</li>
        <li>Don't rely on color alone to convey information</li>
      </ul>
      
      <h2>Testing</h2>
      <ul>
        <li>Use axe DevTools browser extension</li>
        <li>Test with keyboard only</li>
        <li>Use a screen reader (NVDA, VoiceOver)</li>
        <li>Automate accessibility testing in CI/CD</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Accessibility is everyone's responsibility. By following these best practices, you can create inclusive applications that work for everyone.</p>
    `
  }
};

export default function ArticlePage({ params }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  // Get the current URL for sharing
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = article.title;

  // Share functions
  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <PageIntro eyebrow={article.category} title={article.title}>
        <div className="flex items-center gap-4 text-sm text-neutral-600">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </PageIntro>

      <Container className="mt-16 sm:mt-24 lg:mt-32">
        <FadeIn>
          <article className="mx-auto max-w-3xl">
            <div 
              className="prose prose-lg prose-neutral"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-medium text-neutral-950 hover:text-neutral-700"
              >
                Back to all articles
              </Link>
              
              {/* Category Navigation */}
              <Link
                href={`/blog?category=${encodeURIComponent(article.category)}`}
                className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-200"
              >
                View all {article.category} articles
              </Link>
            </div>

            <div className="mt-16 rounded-2xl bg-neutral-100 p-8">
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Share this article
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Share this article with your network
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <button
                  onClick={shareToTwitter}
                  className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-[#1DA1F2] hover:text-[#1DA1F2]"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter className="h-4 w-4" />
                  Twitter
                </button>
                <button
                  onClick={shareToLinkedIn}
                  className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-[#0A66C2] hover:text-[#0A66C2]"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950"
                  aria-label="Copy link to clipboard"
                >
                  <FaLink className="h-4 w-4" />
                  {copied ? 'Copied!' : 'Copy Link'}
                </button>
              </div>
            </div>

            {/* Related Articles Section */}
            <div className="mt-16">
              <h3 className="font-display text-xl font-semibold text-neutral-950">
                Explore More Articles
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.entries(articles)
                  .filter(([slug]) => slug !== params.slug)
                  .slice(0, 2)
                  .map(([slug, relatedArticle]) => (
                    <Link
                      key={slug}
                      href={`/blog/${slug}`}
                      className="group rounded-lg border border-neutral-200 p-4 transition hover:border-neutral-400"
                    >
                      <span className="text-xs font-medium text-neutral-500">
                        {relatedArticle.category}
                      </span>
                      <h4 className="mt-1 font-display font-semibold text-neutral-950 group-hover:text-neutral-700">
                        {relatedArticle.title}
                      </h4>
                      <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                        {relatedArticle.content.replace(/<[^>]*>/g, '').slice(0, 100)}...
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </FadeIn>
      </Container>
    </>
  );
}