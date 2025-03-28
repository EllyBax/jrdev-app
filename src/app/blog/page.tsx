"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

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
		description:
			"A comprehensive guide for beginners looking to start their journey in web development.",
	},
	{
		id: 2,
		title: "Modern JavaScript Practices",
		author: "Jane Smith",
		date: "2024-02-10",
		tags: ["JavaScript", "Best Practices"],
		readTime: "8 min read",
		description:
			"Explore the latest JavaScript practices and patterns used in modern web development.",
	},
	{
		id: 3,
		title: "Building with Next.js",
		author: "Mike Johnson",
		date: "2024-02-05",
		tags: ["Next.js", "React"],
		readTime: "6 min read",
		description:
			"Learn how to build scalable applications using Next.js and React framework.",
	},
	{
		id: 4,
		title: "TypeScript Best Practices",
		author: "Sarah Wilson",
		date: "2024-02-01",
		tags: ["TypeScript", "Programming"],
		readTime: "7 min read",
		description:
			"Discover essential TypeScript patterns and practices for better code quality.",
	},
	{
		id: 5,
		title: "Introduction to TailwindCSS",
		author: "Alex Chen",
		date: "2024-01-28",
		tags: ["CSS", "TailwindCSS"],
		readTime: "4 min read",
		description:
			"A beginner's guide to using TailwindCSS for rapid UI development.",
	},
	{
		id: 6,
		title: "API Development with Node.js",
		author: "David Kim",
		date: "2024-01-25",
		tags: ["Node.js", "API", "Backend"],
		readTime: "10 min read",
		description:
			"Learn how to create robust and scalable APIs using Node.js and Express.",
	},
];

const BlogCard = ({ post }: { post: BlogPost }) => {
	return (
		<Link
			href={`/blog/${post.id}`}
			className="rounded-lg border border-amber-200/20 from-amber-200/30 to-amber-100/20 p-6 transition-all hover:border-amber-200/40 hover:bg-linear-120"
		>
			<div>
				<h2 className="mb-2 font-bold text-xl">{post.title}</h2>
				<div className="mb-2 flex items-center gap-2 text-amber-200/70 text-sm">
					<span>{post.author}</span>
					<span>•</span>
					<span>{post.date}</span>
					<span>•</span>
					<span>{post.readTime}</span>
				</div>
				<div className="mb-3 flex gap-2">
					{post.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full bg-amber-200/10 px-2 py-1 text-xs"
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
		<div className="min-h-screen bg-[#0f0f0f] p-8">
			<div className="mx-auto max-w-6xl">
				<Nav />
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-5xl text-amber-200">
						Welcome to Our Blog
					</h1>
					<p className="text-amber-200/80 text-xl">
						Explore our latest articles and insights about development,
						technology, and more.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{mockBlogPosts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
}
