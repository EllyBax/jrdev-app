"use client";

import { useState } from "react";

// Mock data for student dashboard
const mockStudentData = {
	profile: {
		username: "John Doe",
		enrolledCourses: 3,
		overallProgress: 75,
		projects: 4,
		blogPosts: 2,
	},
	courses: [
		{ id: 1, name: "Web Development Fundamentals", progress: 85 },
		{ id: 2, name: "Advanced JavaScript", progress: 70 },
		{ id: 3, name: "React & Next.js", progress: 45 },
	],
	projects: [
		{ id: 1, name: "Portfolio Website", status: "Completed", date: "2024-01-15" },
		{ id: 2, name: "E-commerce App", status: "In Progress", date: "2024-02-01" },
	],
	blogPosts: [
		{
			id: 1,
			title: "My Journey in Web Development",
			preview: "Starting my journey in web development has been...",
			date: "2024-01-20",
		},
	],
};

// Progress bar component
const ProgressBar = ({ progress }: { progress: number }) => (
	<div className="mt-2 h-2.5 w-full rounded-full bg-gray-700">
		<div
			className="h-2.5 rounded-full bg-amber-200"
			style={{ width: `${progress}%` }}
		/>
	</div>
);

// Metric card component
const MetricCard = ({
	title,
	value,
	icon,
}: {
	title: string;
	value: number | string;
	icon: string;
}) => (
	<div className="rounded-lg border border-amber-200/20 bg-[#212122] p-6 transition-all hover:border-amber-200/40">
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-gray-400 text-sm">{title}</h3>
				<p className="mt-1 font-bold text-2xl text-amber-200">{value}</p>
			</div>
			<span className="text-3xl">{icon}</span>
		</div>
	</div>
);

export default function StudentDashboard() {
	const [activeTab, setActiveTab] = useState<"courses" | "projects" | "blog">("courses");
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [username, setUsername] = useState(mockStudentData.profile.username);

	return (
		<div className="space-y-6">
			{/* Header with User Profile Button */}
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-2xl text-amber-200">My Dashboard</h1>
				<div className="relative">
					<button
						onClick={() => setIsProfileOpen(!isProfileOpen)}
						className="flex items-center space-x-2 rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-amber-200 hover:border-amber-200/40"
					>
						<span>👤</span>
						<span>{username}</span>
					</button>
					{isProfileOpen && (
						<div className="absolute right-0 mt-2 w-48 rounded-lg border border-amber-200/20 bg-[#212122] p-2 shadow-lg">
							<button
								onClick={() => {
									const newUsername = prompt("Enter new username:");
									if (newUsername) setUsername(newUsername);
								}}
								className="w-full rounded px-4 py-2 text-left text-gray-400 hover:bg-amber-200/10 hover:text-amber-200"
							>
								Change Username
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Metrics Grid */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<MetricCard
					title="Enrolled Courses"
					value={mockStudentData.profile.enrolledCourses}
					icon="📚"
				/>
				<MetricCard
					title="Overall Progress"
					value={`${mockStudentData.profile.overallProgress}%`}
					icon="📊"
				/>
				<MetricCard
					title="Projects"
					value={mockStudentData.profile.projects}
					icon="🎯"
				/>
				<MetricCard
					title="Blog Posts"
					value={mockStudentData.profile.blogPosts}
					icon="✍️"
				/>
			</div>

			{/* Tabs */}
			<div className="border-amber-200/20 border-b">
				<div className="flex space-x-4">
					<button
						type="button"
						onClick={() => setActiveTab("courses")}
						className={`-mb-px px-4 py-2 ${activeTab === "courses" ? "border-amber-200 border-b-2 text-amber-200" : "text-gray-400 hover:text-amber-200/70"}`}
					>
						My Courses
					</button>
					<button
						type="button"
						onClick={() => setActiveTab("projects")}
						className={`-mb-px px-4 py-2 ${activeTab === "projects" ? "border-amber-200 border-b-2 text-amber-200" : "text-gray-400 hover:text-amber-200/70"}`}
					>
						Projects
					</button>
					<button
						type="button"
						onClick={() => setActiveTab("blog")}
						className={`-mb-px px-4 py-2 ${activeTab === "blog" ? "border-amber-200 border-b-2 text-amber-200" : "text-gray-400 hover:text-amber-200/70"}`}
					>
						Blog
					</button>
				</div>
			</div>

			{/* Content */}
			<div className="grid grid-cols-1 gap-4">
				{activeTab === "courses" &&
					mockStudentData.courses.map((course) => (
						<div
							key={course.id}
							className="rounded-lg border border-amber-200/20 bg-[#212122] p-4 transition-all hover:border-amber-200/40"
						>
							<div className="flex items-start justify-between">
								<div>
									<h3 className="font-medium text-amber-200">
										{course.name}
									</h3>
								</div>
								<span className="font-medium text-amber-200 text-sm">
									{course.progress}%
								</span>
							</div>
							<ProgressBar progress={course.progress} />
						</div>
					))}

				{activeTab === "projects" && (
					<div className="space-y-4">
						<div className="flex justify-end">
							<button className="rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-amber-200 hover:border-amber-200/40">
								+ Upload New Project
							</button>
						</div>
						{mockStudentData.projects.map((project) => (
							<div
								key={project.id}
								className="rounded-lg border border-amber-200/20 bg-[#212122] p-4 transition-all hover:border-amber-200/40"
							>
								<div className="flex items-center justify-between">
									<div>
										<h3 className="font-medium text-amber-200">
											{project.name}
										</h3>
										<p className="mt-1 text-gray-400 text-sm">
											{project.date}
										</p>
									</div>
									<span
										className={`rounded-full px-3 py-1 text-sm ${project.status === "Completed" ? "bg-green-500/20 text-green-300" : "bg-amber-500/20 text-amber-300"}`}
									>
										{project.status}
									</span>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "blog" && (
					<div className="space-y-4">
						<div className="flex justify-end">
							<button className="rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-amber-200 hover:border-amber-200/40">
								+ Write New Post
							</button>
						</div>
						{mockStudentData.blogPosts.map((post) => (
							<div
								key={post.id}
								className="rounded-lg border border-amber-200/20 bg-[#212122] p-4 transition-all hover:border-amber-200/40"
							>
								<h3 className="font-medium text-amber-200">{post.title}</h3>
								<p className="mt-2 text-gray-400">{post.preview}</p>
								<p className="mt-2 text-sm text-gray-500">{post.date}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}