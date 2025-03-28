'use client';

import { useState } from 'react';

// Mock data for dashboard
const mockData = {
    courses: [
        { id: 1, name: 'Web Development Fundamentals', students: 45, progress: 75 },
        { id: 2, name: 'Advanced JavaScript', students: 32, progress: 60 },
        { id: 3, name: 'React & Next.js', students: 28, progress: 40 },
        { id: 4, name: 'Backend Development', students: 38, progress: 25 },
    ],
    students: [
        { id: 1, name: 'Alice Johnson', courses: 3, avgProgress: 85 },
        { id: 2, name: 'Bob Smith', courses: 2, avgProgress: 70 },
        { id: 3, name: 'Carol White', courses: 4, avgProgress: 92 },
        { id: 4, name: 'David Brown', courses: 1, avgProgress: 45 },
    ],
    metrics: {
        totalStudents: 143,
        totalCourses: 12,
        activeProjects: 28,
        averageProgress: 68,
    },
};

// Card component for metrics
const MetricCard = ({ title, value, icon }: { title: string; value: number; icon: string }) => (
    <div className="bg-[#212122] p-6 rounded-lg border border-amber-200/20 hover:border-amber-200/40 transition-all">
        <div className="flex items-center justify-between">
            <div>
                <h3 className="text-gray-400 text-sm">{title}</h3>
                <p className="text-2xl font-bold text-amber-200 mt-1">{value}</p>
            </div>
            <span className="text-3xl">{icon}</span>
        </div>
    </div>
);

// Progress bar component
const ProgressBar = ({ progress }: { progress: number }) => (
    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
        <div
            className="bg-amber-200 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
        />
    </div>
);

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<'courses' | 'students'>('courses');

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-amber-200">Dashboard Overview</h1>
                <div className="text-sm text-gray-400">
                    Last updated: {new Date().toLocaleDateString()}
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                    title="Total Students"
                    value={mockData.metrics.totalStudents}
                    icon="👥"
                />
                <MetricCard
                    title="Total Courses"
                    value={mockData.metrics.totalCourses}
                    icon="📚"
                />
                <MetricCard
                    title="Active Projects"
                    value={mockData.metrics.activeProjects}
                    icon="🎯"
                />
                <MetricCard
                    title="Average Progress"
                    value={mockData.metrics.averageProgress}
                    icon="📊"
                />
            </div>

            {/* Tabs */}
            <div className="border-b border-amber-200/20">
                <div className="flex space-x-4">
                    <button
                        onClick={() => setActiveTab('courses')}
                        className={`py-2 px-4 -mb-px ${activeTab === 'courses' ? 'border-b-2 border-amber-200 text-amber-200' : 'text-gray-400 hover:text-amber-200/70'}`}
                    >
                        Courses
                    </button>
                    <button
                        onClick={() => setActiveTab('students')}
                        className={`py-2 px-4 -mb-px ${activeTab === 'students' ? 'border-b-2 border-amber-200 text-amber-200' : 'text-gray-400 hover:text-amber-200/70'}`}
                    >
                        Students
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-4">
                {activeTab === 'courses' ? (
                    mockData.courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[#212122] p-4 rounded-lg border border-amber-200/20 hover:border-amber-200/40 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-amber-200">{course.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{course.students} Students Enrolled</p>
                                </div>
                                <span className="text-sm font-medium text-amber-200">{course.progress}%</span>
                            </div>
                            <ProgressBar progress={course.progress} />
                        </div>
                    ))
                ) : (
                    mockData.students.map((student) => (
                        <div
                            key={student.id}
                            className="bg-[#212122] p-4 rounded-lg border border-amber-200/20 hover:border-amber-200/40 transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-amber-200">{student.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{student.courses} Courses Enrolled</p>
                                </div>
                                <span className="text-sm font-medium text-amber-200">{student.avgProgress}%</span>
                            </div>
                            <ProgressBar progress={student.avgProgress} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}