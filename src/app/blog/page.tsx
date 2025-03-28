'use client';

import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  tags: string[];
  readTime: string;
  description: string;
}

const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    author: "John Doe",
    date: "2024-02-15",
    tags: ["Web Development", "Beginners"],
    readTime: "5 min read",
    description: "A comprehensive guide for beginners looking to start their journey in web development."
  },
  {
    id: 2,
    title: "Modern JavaScript Practices",
    author: "Jane Smith",
    date: "2024-02-10",
    tags: ["JavaScript", "Best Practices"],
    readTime: "8 min read",
    description: "Explore the latest JavaScript practices and patterns used in modern web development."
  },
  {
    id: 3,
    title: "Building with Next.js",
    author: "Mike Johnson",
    date: "2024-02-05",
    tags: ["Next.js", "React"],
    readTime: "6 min read",
    description: "Learn how to build scalable applications using Next.js and React framework."
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    author: "Sarah Wilson",
    date: "2024-02-01",
    tags: ["TypeScript", "Programming"],
    readTime: "7 min read",
    description: "Discover essential TypeScript patterns and practices for better code quality."
  },
  {
    id: 5,
    title: "Introduction to TailwindCSS",
    author: "Alex Chen",
    date: "2024-01-28",
    tags: ["CSS", "TailwindCSS"],
    readTime: "4 min read",
    description: "A beginner's guide to using TailwindCSS for rapid UI development."
  },
  {
    id: 6,
    title: "API Development with Node.js",
    author: "David Kim",
    date: "2024-01-25",
    tags: ["Node.js", "API", "Backend"],
    readTime: "10 min read",
    description: "Learn how to create robust and scalable APIs using Node.js and Express."
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`} className="p-6 border border-amber-200/20 rounded-lg hover:border-amber-200/40 hover:bg-linear-120 from-amber-200/30 to-amber-100/20 transition-all">
    <div>
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <div className="flex items-center gap-2 text-sm text-amber-200/70 mb-2">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <div className="flex gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-amber-200/10 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-amber-200/80">{post.description}</p>
    </div>
    </Link>
  );
};

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl text-amber-200/80">
            Explore our latest articles and insights about development, technology, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBlogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}