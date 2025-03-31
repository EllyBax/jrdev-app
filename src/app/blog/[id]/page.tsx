'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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
    title: "The Future of Artificial Intelligence in Web Development",
    author: "Dr. Sarah Chen",
    date: "2024-02-20",
    tags: ["AI", "Web Development", "Technology", "Future Trends"],
    readTime: "12 min read",
    description: "Explore how artificial intelligence is revolutionizing web development, from automated coding to intelligent user interfaces and predictive analytics. Learn about the latest AI tools and frameworks that are shaping the future of web development."
  },
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

const BlogPost = () => {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [showHash, setShowHash] = useState(false);

  useEffect(() => {
    const postId = Number(params.id);
    const foundPost = mockBlogPosts.find(p => p.id === postId);
    setPost(foundPost || null);
  }, [params.id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-amber-200">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0f0f] p-6 fixed h-screen overflow-y-auto">
        <nav className="space-y-2">
          <div className="text-amber-200/80 hover:text-amber-200 cursor-pointer">
            <a href="#title">Title</a>
          </div>
          <div className="text-amber-200/80 hover:text-amber-200 cursor-pointer">
            <a href="#metadata">Metadata</a>
          </div>
          <div className="text-amber-200/80 hover:text-amber-200 cursor-pointer">
            <a href="#description">Description</a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <article className="max-w-3xl mx-auto">
          {/* Title Section */}
          <div 
            id="title"
            className="group relative cursor-pointer"
            onMouseEnter={() => setShowHash(true)}
            onMouseLeave={() => setShowHash(false)}
          >
            <h1 className="text-4xl font-bold text-amber-200 mb-2">
              {showHash && (
                <span className="absolute -left-6 text-amber-200/60">#</span>
              )}
              {post.title}
            </h1>
          </div>

          {/* Metadata Section */}
          <div id="metadata" className="mb-8 text-amber-200/80">
            <div className="flex items-center gap-4 text-sm">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="mt-4 flex gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-amber-200/10 text-amber-200 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div id="description" className="prose prose-amber prose-invert max-w-none">
            <p className="text-amber-200/90 leading-relaxed mb-8">
              {post.description}
            </p>
            <div className="space-y-6 text-amber-200/90">
              <section>
                <h2 className="text-2xl font-semibold text-amber-200 mb-4"
								onMouseEnter={() => setShowHash(true)}
								onMouseLeave={() => setShowHash(false)}
								>Introduction to AI in Web Development</h2>
                <p className="leading-relaxed">
                  The integration of artificial intelligence into web development has been one of the most significant technological advancements in recent years. As we move forward, AI continues to reshape how we approach web development, making processes more efficient and outcomes more effective.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-amber-200 mb-4"
								onMouseEnter={() => setShowHash(true)}
								onMouseLeave={() => setShowHash(false)}
								>Key Areas of AI Impact</h2>
                <ul className="list-disc list-inside space-y-4 ml-4">
                  <li>Automated Code Generation</li>
                  <li>Intelligent Testing and Debugging</li>
                  <li>Personalized User Experiences</li>
                  <li>Predictive Analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-200 mb-4"
								onMouseEnter={() => setShowHash(true)}
								onMouseLeave={() => setShowHash(false)}
								>The Role of Machine Learning</h2>
                <p className="leading-relaxed">
                  Machine learning algorithms are becoming increasingly sophisticated in understanding user behavior and adapting websites accordingly. This leads to more personalized and engaging web experiences that can significantly improve user satisfaction and conversion rates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-200 mb-4"
								onMouseEnter={() => setShowHash(true)}
								onMouseLeave={() => setShowHash(false)}
								>Future Implications</h2>
                <p className="leading-relaxed">
                  As AI continues to evolve, we can expect to see even more revolutionary changes in web development. From advanced natural language processing to automated design systems, the possibilities are endless. Developers who embrace these technologies will be well-positioned for the future of web development.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-amber-200 mb-4"
								onMouseEnter={() => setShowHash(true)}
								onMouseLeave={() => setShowHash(false)}
								>Conclusion</h2>
                <p className="leading-relaxed">
                  The fusion of AI and web development is not just a trend but a fundamental shift in how we create and maintain web applications. As we look to the future, it's clear that AI will continue to play an increasingly important role in shaping the web development landscape.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;

