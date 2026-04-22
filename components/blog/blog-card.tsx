import { BlogPost } from "@/lib/types";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-stone-900 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-stone-700 transition">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime} min read
          </span>
          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1 font-medium text-stone-700 hover:text-stone-900 transition"
          >
            Read article <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </article>
  );
}
