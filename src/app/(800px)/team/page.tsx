import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const teamMembers = [
	{
		id: 1,
		name: "John Smith",
		title: "Lead Developer",
		image: "https://randomuser.me/api/portraits/women/36.jpg",
	},
	{
		id: 2,
		name: "Sarah Johnson",
		title: "UI/UX Designer",
		image: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: 3,
		name: "Michael Chen",
		title: "Backend Engineer",
		image: "https://randomuser.me/api/portraits/men/36.jpg",
	},
	{
		id: 4,
		name: "Emily Davis",
		title: "Project Manager",
		image: "https://randomuser.me/api/portraits/women/21.jpg",
	},
	{
		id: 5,
		name: "David Wilson",
		title: "Full Stack Developer",
		image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
	{
		id: 6,
		name: "Lisa Anderson",
		title: "DevOps Engineer",
		image: "https://randomuser.me/api/portraits/women/36.jpg",
	},
	{
		id: 7,
		name: "Sarah Johnson",
		title: "UI/UX Designer",
		image: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: 8,
		name: "Michael Chen",
		title: "Backend Engineer",
		image: "https://randomuser.me/api/portraits/men/36.jpg",
	},
	{
		id: 9,
		name: "Emily Davis",
		title: "Project Manager",
		image: "https://randomuser.me/api/portraits/women/21.jpg",
	},
	{
		id: 10,
		name: "David Wilson",
		title: "Full Stack Developer",
		image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
	{
		id: 12,
		name: "Sarah Johnson",
		title: "UI/UX Designer",
		image: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: 13,
		name: "Michael Chen",
		title: "Backend Engineer",
		image: "https://randomuser.me/api/portraits/men/36.jpg",
	},
	{
		id: 14,
		name: "Emily Davis",
		title: "Project Manager",
		image: "https://randomuser.me/api/portraits/women/21.jpg",
	},
	{
		id: 51,
		name: "David Wilson",
		title: "Full Stack Developer",
		image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
];

export default function TeamPage() {
	return (
		<>
			<h1 className="mb-4 font-bold text-3xl">Our Team</h1>
			<hr className="my-6" />

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{teamMembers.map((member) => (
					<Link
						key={member.id}
						href={`/team/${member.id}`}
						className="group block"
					>
						<div className="rounded-lg border border-transparent bg-[#212122] p-6 transition-all group-hover:border-amber-200 group-hover:shadow-amber-200/20 group-hover:shadow-lg">
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="h-32 w-32 overflow-hidden rounded-full border-2 border-amber-200/20 transition-all group-hover:border-amber-200">
									<img
										src={member.image}
										alt={member.name}
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<h3 className="font-semibold text-amber-200 text-xl">
										{member.name}
									</h3>
									<p className="text-gray-300">{member.title}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
