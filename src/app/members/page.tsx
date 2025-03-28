"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

type MemberLevel =
	| "NOOB"
	| "AMATEUR"
	| "INTERMEDIATE"
	| "10X"
	| "CODE NINJA"
	| "BYTE WIZARD"
	| "TECH GURU"
	| "DEBUGGING DEITY";

interface Member {
	id: string;
	name: string;
	email: string;
	phone: string;
	organization: string;
	level: MemberLevel;
	levelProgress: number; // 0-100
}

const members: Member[] = [
	{
		id: "clr1h2x0g0000jrp9d8m5f6n1",
		name: "Alice Chen",
		email: "alice.c@techstart.com",
		phone: "(555) 123-4567",
		organization: "TechStart Inc.",
		level: "NOOB",
		levelProgress: 15,
	},
	{
		id: "clr1h2x0g0001jrp9g7h2k4m8",
		name: "Bob Smith",
		email: "bsmith@devco.net",
		phone: "(555) 234-5678",
		organization: "DevCo Solutions",
		level: "AMATEUR",
		levelProgress: 35,
	},
	{
		id: "clr1h2x0g0002jrp9l5n9p6q3",
		name: "Carol Davis",
		email: "carol.d@innovate.org",
		phone: "(555) 345-6789",
		organization: "Innovate Labs",
		level: "INTERMEDIATE",
		levelProgress: 65,
	},
	{
		id: "clr1h2x0g0003jrp9r8s4t1v7",
		name: "David Wilson",
		email: "d.wilson@codeforge.com",
		phone: "(555) 456-7890",
		organization: "CodeForge",
		level: "10X",
		levelProgress: 90,
	},
	{
		id: "clr1h2x0g0004jrp9w2x7y9z5",
		name: "Eva Brown",
		email: "eva.b@techgiant.com",
		phone: "(555) 567-8901",
		organization: "TechGiant",
		level: "CODE NINJA",
		levelProgress: 85,
	},
	{
		id: "clr1h2x0g0005jrp9a4b1c8d6",
		name: "Frank Zhang",
		email: "f.zhang@devhub.net",
		phone: "(555) 678-9012",
		organization: "DevHub",
		level: "BYTE WIZARD",
		levelProgress: 95,
	},
	{
		id: "clr1h2x0g0006jrp9e5f2g7h4",
		name: "Grace Kim",
		email: "grace.k@innovatech.com",
		phone: "(555) 789-0123",
		organization: "InnovaTech",
		level: "TECH GURU",
		levelProgress: 88,
	},
	{
		id: "clr1h2x0g0007jrp9i8j5k2l9",
		name: "Henry Patel",
		email: "h.patel@softworks.org",
		phone: "(555) 890-1234",
		organization: "SoftWorks",
		level: "DEBUGGING DEITY",
		levelProgress: 98,
	},
	{
		id: "clr1h2x0g0008jrp9m3n6p9q4",
		name: "Iris Lee",
		email: "iris.l@codelab.com",
		phone: "(555) 901-2345",
		organization: "CodeLab",
		level: "NOOB",
		levelProgress: 20,
	},
	{
		id: "clr1h2x0g0009jrp9r7s4t1v8",
		name: "Jack Thompson",
		email: "j.thompson@techcore.net",
		phone: "(555) 012-3456",
		organization: "TechCore",
		level: "AMATEUR",
		levelProgress: 45,
	},
	{
		id: "clr1h2x0g0010jrp9w5x8y3z7",
		name: "Kelly Wang",
		email: "k.wang@devstream.org",
		phone: "(555) 123-4567",
		organization: "DevStream",
		level: "INTERMEDIATE",
		levelProgress: 70,
	},
	{
		id: "clr1h2x0g0011jrp9a2b5c8d4",
		name: "Liam O'Connor",
		email: "liam.o@innovate.net",
		phone: "(555) 234-5678",
		organization: "Innovate Solutions",
		level: "10X",
		levelProgress: 92,
	},
	{
		id: "clr1h2x0g0012jrp9e6f9g2h7",
		name: "Maria Garcia",
		email: "m.garcia@techwave.com",
		phone: "(555) 345-6789",
		organization: "TechWave",
		level: "CODE NINJA",
		levelProgress: 87,
	},
	{
		id: "clr1h2x0g0013jrp9i4j7k0l3",
		name: "Nathan Kim",
		email: "n.kim@codebridge.org",
		phone: "(555) 456-7890",
		organization: "CodeBridge",
		level: "BYTE WIZARD",
		levelProgress: 94,
	},
	{
		id: "clr1h2x0g0014jrp9m8n1p4q9",
		name: "Olivia Chen",
		email: "o.chen@devmatrix.net",
		phone: "(555) 567-8901",
		organization: "DevMatrix",
		level: "TECH GURU",
		levelProgress: 89,
	},
	{
		id: "clr1h2x0g0015jrp9r3s6t9v2",
		name: "Peter Zhang",
		email: "p.zhang@softlab.com",
		phone: "(555) 678-9012",
		organization: "SoftLab",
		level: "DEBUGGING DEITY",
		levelProgress: 97,
	},
	{
		id: "clr1h2x0g0016jrp9w7x0y3z8",
		name: "Quinn Lee",
		email: "q.lee@techhub.org",
		phone: "(555) 789-0123",
		organization: "TechHub",
		level: "NOOB",
		levelProgress: 25,
	},
	{
		id: "clr1h2x0g0017jrp9a1b4c7d5",
		name: "Rachel Brown",
		email: "r.brown@devpoint.net",
		phone: "(555) 890-1234",
		organization: "DevPoint",
		level: "AMATEUR",
		levelProgress: 40,
	},
	{
		id: "clr1h2x0g0018jrp9e5f8g1h6",
		name: "Samuel Park",
		email: "s.park@innovacode.com",
		phone: "(555) 901-2345",
		organization: "InnovaCode",
		level: "INTERMEDIATE",
		levelProgress: 75,
	},
	{
		id: "clr1h2x0g0019jrp9i9j2k5l8",
		name: "Tara Wilson",
		email: "t.wilson@techforge.org",
		phone: "(555) 012-3456",
		organization: "TechForge",
		level: "10X",
		levelProgress: 93,
	},
];

const getLevelColor = (level: MemberLevel): string => {
	const colors = {
		NOOB: "bg-green-500",
		AMATEUR: "bg-blue-500",
		INTERMEDIATE: "bg-purple-500",
		"10X": "bg-amber-500",
		"CODE NINJA": "bg-red-500",
		"BYTE WIZARD": "bg-indigo-500",
		"TECH GURU": "bg-pink-500",
		"DEBUGGING DEITY": "bg-yellow-500",
	};
	return colors[level];
};

export default function MembersPage() {
	const [hoveredMember, setHoveredMember] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState("");
	const router = useRouter();

	const filteredMembers = members.filter((member) => {
		const searchLower = searchQuery.toLowerCase();
		return (
			member.name.toLowerCase().includes(searchLower) ||
			member.email.toLowerCase().includes(searchLower) ||
			member.organization.toLowerCase().includes(searchLower) ||
			member.level.toLowerCase().includes(searchLower)
		);
	});

	return (
		<main className="min-h-screen">
			<div className="mx-auto max-w-[1200px] p-4">
				<Nav />

				<div className="flex items-center justify-between">
					<h1 className="mb-4 font-bold text-3xl">Members</h1>
					<input
						type="text"
						placeholder="Search members..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-64 rounded-lg border border-amber-200/20 bg-[#1a1a1b] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
					/>
				</div>
				<hr className="my-6" />

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-amber-200/20 border-b bg-[#212122]">
								<th className="p-4 text-left text-amber-200">Name</th>
								<th className="p-4 text-left text-amber-200">Email</th>
								<th className="p-4 text-left text-amber-200">Phone</th>
								<th className="p-4 text-left text-amber-200">Organization</th>
								<th className="p-4 text-left text-amber-200">Level</th>
							</tr>
						</thead>
						<tbody>
							{filteredMembers.map((member, index) => (
								<tr
									key={member.id}
									onClick={() => router.push(`/members/${member.id}`)}
									className="cursor-pointer border-amber-200/10 border-b transition-colors hover:bg-[#212122]"
								>
									<td className="p-4 text-gray-300">{member.name}</td>
									<td className="p-4 text-gray-300">{member.email}</td>
									<td className="p-4 text-gray-300">{member.phone}</td>
									<td className="p-4 text-gray-300">{member.organization}</td>
									<td className="p-4">
										<div
											className="relative w-48"
											onMouseEnter={() => setHoveredMember(member.id)}
											onMouseLeave={() => setHoveredMember(null)}
										>
											<div className="h-2 overflow-hidden rounded-full bg-gray-700">
												<div
													className={`h-full ${getLevelColor(member.level)} transition-all duration-300`}
													style={{ width: `${member.levelProgress}%` }}
												/>
											</div>
											{hoveredMember === member.id && (
												<div className="-top-8 -translate-x-1/2 absolute left-1/2 transform whitespace-nowrap rounded border border-amber-200/20 bg-[#212122] px-3 py-1 text-amber-200 text-sm">
													{member.level}
												</div>
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<Footer />
			</div>
		</main>
	);
}
