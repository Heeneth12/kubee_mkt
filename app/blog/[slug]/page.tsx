import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const formatted = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-white/70">
            {formatted} · {post.readTime} min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold mb-8 hover:underline">
            ← Back to Blog
          </Link>
          <article
            className="prose prose-slate prose-sm sm:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
          />
        </div>
      </section>

      {/* Related posts */}
      <section className="bg-brand-light py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-6">More from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-xl p-4 border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs text-brand-blue font-semibold">{p.category}</span>
                  <h3 className="text-sm font-bold text-slate-800 mt-1 leading-snug">{p.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
