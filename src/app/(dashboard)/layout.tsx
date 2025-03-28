'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/dashboard', label: 'Overview', icon: '📊' },
    { href: '/dashboard/projects', label: 'Projects', icon: '📁' },
    { href: '/dashboard/tasks', label: 'Tasks', icon: '✓' },
    { href: '/dashboard/team', label: 'Team', icon: '👥' },
    { href: '/dashboard/settings', label: 'Settings', icon: '⚙️' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-gray-300">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-[#212122] border-r border-amber-200/20 w-64 md:translate-x-0`}
            >
                <div className="h-full px-3 py-4 flex flex-col">
                    {/* Logo/Brand */}
                    <div className="flex items-center justify-between mb-6 px-2">
                        <Link href="/dashboard" className="text-2xl font-bold text-amber-200">
                            DevHub
                        </Link>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="md:hidden text-gray-400 hover:text-amber-200"
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
                                    className={`flex items-center px-2 py-2 text-sm rounded-lg ${isActive ? 'bg-amber-200/10 text-amber-200' : 'hover:bg-amber-200/5 hover:text-amber-200'}`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile */}
                    <div className="pt-4 mt-4 border-t border-amber-200/20">
                        <div className="flex items-center px-2 py-2 space-x-4">
                            <div className="w-8 h-8 rounded-full bg-amber-200/20 flex items-center justify-center text-amber-200">
                                👤
                            </div>
                            <div>
                                <p className="text-sm font-medium">John Doe</p>
                                <p className="text-xs text-gray-400">john@devhub.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile sidebar toggle */}
            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className={`p-2 rounded-lg bg-[#212122] border border-amber-200/20 text-amber-200 ${isSidebarOpen ? 'hidden' : ''}`}
                >
                    ☰
                </button>
            </div>

            {/* Main Content */}
            <main className="md:ml-64 p-4">
                {children}
            </main>
        </div>
    );
}