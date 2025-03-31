"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
	{ href: "/admin", label: "Overview", icon: "📊" },
	{ href: "/admin/projects", label: "Projects", icon: "📁" },
	{ href: "/admin/tasks", label: "Tasks", icon: "✓" },
	{ href: "/admin/team", label: "Team", icon: "👥" },
	{ href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function DashboardLayout({
	children,
}: { children: React.ReactNode }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const pathname = usePathname();
	const isAdminPage = pathname.startsWith("/admin");

	return (
		<div className="min-h-screen bg-[#1a1a1a] text-gray-300">
			{isAdminPage && (
				< aside
					className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 border-amber-200/20 border-r bg-[#212122] md:translate-x-0`}
				>
					<div className="flex h-full flex-col px-3 py-4">
						{/* Logo/Brand */}
						<div className="mb-6 flex items-center justify-between px-2">
							<Link
								href="/admin"
								className="font-bold text-2xl text-amber-200"
							>
								JrDev
							</Link>
							<button
								onClick={() => setIsSidebarOpen(false)}
								className="text-gray-400 hover:text-amber-200 md:hidden"
							>
								✕
							</button>
						</div>

						{/* Navigation */}
						<nav className="flex-1 space-y-1">
							{navItems.map((item) => {
								const isActive = pathname === item.href;
								return (
									<Link
										key={item.href}
										href={item.href}
										className={`flex items-center rounded-lg px-2 py-2 text-sm ${isActive ? "bg-amber-200/10 text-amber-200" : "hover:bg-amber-200/5 hover:text-amber-200"}`}
									>
										<span className="mr-3">{item.icon}</span>
										{item.label}
									</Link>
								);
							})}
						</nav>

						{/* User Profile */}
						<div className="mt-4 border-amber-200/20 border-t pt-4">
							<div className="flex items-center space-x-4 px-2 py-2">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-200/20 text-amber-200">
									👤
								</div>
								<div>
									<p className="font-medium text-sm">John Doe</p>
									<p className="text-gray-400 text-xs">john@devhub.com</p>
								</div>
							</div>
						</div>
					</div>

					{/* Mobile sidebar toggle */}
					<div className="fixed top-4 left-4 z-50 md:hidden">
						<button
							onClick={() => setIsSidebarOpen(true)}
							className={`rounded-lg border border-amber-200/20 bg-[#212122] p-2 text-amber-200 ${isSidebarOpen ? "hidden" : ""}`}
						>
							☰
						</button>
					</div>
				</aside>
			)
			}

			{/* Main Content */}
			<main className={`p-4 ${isAdminPage ? 'md:ml-64' : 'md:mx-32'}`}>{children}</main>
		</div >
	);
}
