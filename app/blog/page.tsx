import type { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import BlogCard from "@/components/BlogCard";
import FooterCTA from "@/components/FooterCTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Inventory management tips, GST guides, and supply chain insights for Indian businesses.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Kubee Blog</h1>
        <p className="text-base text-white/80 max-w-md mx-auto">
          Inventory tips, compliance guides, and business insights for Indian entrepreneurs.
        </p>
      </section>

      {/* Posts */}
      <section className="bg-brand-light py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
