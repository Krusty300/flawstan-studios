"use client";

import { useState } from "react";
import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";

const BlogPage = () => {
  const allArticles = [
    {
      title: "Building Modern Web Applications with Next.js",
      excerpt: "A comprehensive guide to creating performant and scalable web applications using Next.js 14 and React.",
      date: "March 15, 2024",
      category: "Development",
      slug: "building-modern-web-apps-nextjs"
    },
    {
      title: "The Art of Clean Code: Best Practices",
      excerpt: "Learn the principles of writing clean, maintainable code that your team will thank you for.",
      date: "February 28, 2024",
      category: "Best Practices",
      slug: "art-of-clean-code"
    },
    {
      title: "Mastering Tailwind CSS for Rapid UI Development",
      excerpt: "How to leverage utility-first CSS to build beautiful interfaces quickly without leaving your HTML.",
      date: "January 10, 2024",
      category: "Design",
      slug: "mastering-tailwind-css"
    },
    {
      title: "TypeScript Tips for Better Developer Experience",
      excerpt: "Practical TypeScript patterns and tips to improve type safety and developer productivity.",
      date: "December 5, 2023",
      category: "Development",
      slug: "typescript-tips"
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "A guide to making your web applications accessible to everyone, following WCAG guidelines.",
      date: "November 20, 2023",
      category: "Accessibility",
      slug: "building-accessible-web-apps"
    },
    {
      title: "State Management in React: A Complete Guide",
      excerpt: "Understanding different state management approaches in React from useState to Redux and beyond.",
      date: "October 8, 2023",
      category: "Development",
      slug: "state-management-react"
    },
    {
      title: "Career Growth Tips for Developers",
      excerpt: "Essential strategies for advancing your career in tech, from skill development to networking and personal branding.",
      date: "September 15, 2023",
      category: "Career",
      slug: "career-growth-tips"
    },
    {
      title: "Design Systems: Building for Scale",
      excerpt: "Learn how to create and maintain effective design systems that ensure consistency across large applications.",
      date: "August 20, 2023",
      category: "Design",
      slug: "design-systems"
    },
    {
      title: "Accessibility Best Practices for Developers",
      excerpt: "Essential accessibility techniques every developer should know to create inclusive web experiences.",
      date: "July 10, 2023",
      category: "Accessibility",
      slug: "accessibility-best-practices"
    }
  ];

  // Get unique categories
  const categories = ["All", ...new Set(allArticles.map(article => article.category))];
  
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on category and search
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageIntro eyebrow="Blog" title="Thoughts and articles">
        <p>
          I write about development, design, and technology. Sharing knowledge
          and experiences with the community.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search articles by title or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-200"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-300 text-neutral-600 hover:border-neutral-950 hover:text-neutral-950"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Article Count */}
          <div className="mt-6 text-sm text-neutral-500">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <FadeInStagger faster>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <FadeIn key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="group block h-full"
                    >
                      <article className="flex h-full flex-col rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-950 hover:shadow-lg">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-neutral-500">
                            {article.category}
                          </span>
                          <span className="mx-2 text-neutral-300">•</span>
                          <span className="text-sm text-neutral-500">
                            {article.date}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-neutral-950 group-hover:text-neutral-700">
                          {article.title}
                        </h3>
                        <p className="mt-3 flex-grow text-base text-neutral-600">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 text-sm font-medium text-neutral-950 group-hover:underline">
                          Read more →
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          ) : (
            <div className="mt-16 rounded-2xl border border-neutral-200 py-16 text-center">
              <p className="text-lg text-neutral-600">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-sm font-medium text-neutral-950 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Newsletter Section */}
          <div className="mt-24 bg-neutral-950 px-8 py-16 sm:px-12 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Subscribe to my newsletter
              </h2>
              <p className="mt-4 text-neutral-400">
                Get the latest articles and insights delivered straight to your inbox.
                No spam, unsubscribe anytime.
              </p>
              <form 
                className="mt-8 flex gap-4 sm:justify-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  if (email) {
                    alert(`Thanks for subscribing with ${email}!`);
                    e.target.reset();
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-3 text-white placeholder:text-neutral-500 focus:border-neutral-500 focus:outline-none sm:flex-none sm:w-80"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-white px-8 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default BlogPage;