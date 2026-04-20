import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";

type Props = { post: BlogPost };

export default function BlogCard({ post }: Props) {
  const formatted = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Black placeholder for post cover image */}
      <div className="bg-black w-full aspect-[16/9]" />
      <div className="p-5 flex flex-col flex-1">
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
          {post.category}
        </span>
        <h2 className="font-bold text-slate-900 text-base leading-snug mb-2">{post.title}</h2>
        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {formatted} · {post.readTime} min read
          </span>
          <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-brand-blue hover:underline">
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
