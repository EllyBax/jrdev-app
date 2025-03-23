import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const teamMembers = [
    {
        id: 1,
        name: "John Smith",
        title: "Lead Developer",
        image: "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Backend Engineer",
        image: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
        id: 4,
        name: "Emily Davis",
        title: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        id: 5,
        name: "David Wilson",
        title: "Full Stack Developer",
        image: "https://randomuser.me/api/portraits/men/23.jpg"
    },
    {
        id: 6,
        name: "Lisa Anderson",
        title: "DevOps Engineer",
        image: "https://randomuser.me/api/portraits/women/36.jpg"
    },
    {
      id: 7,
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
      id: 8,
      name: "Michael Chen",
      title: "Backend Engineer",
      image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
      id: 9,
      name: "Emily Davis",
      title: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
      id: 10,
      name: "David Wilson",
      title: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    id: 12,
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
},
{
    id: 13,
    name: "Michael Chen",
    title: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg"
},
{
    id: 14,
    name: "Emily Davis",
    title: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
},
{
    id: 51,
    name: "David Wilson",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/23.jpg"
},
];

export default function TeamPage() {
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-[800px] p-4">
                <Nav />

                <h1 className="text-3xl font-bold mb-4">Our Team</h1>
                <hr className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <Link
                            key={member.id}
                            href={`/team/${member.id}`}
                            className="block group"
                        >
                            <div className="bg-[#212122] p-6 rounded-lg border border-transparent group-hover:border-amber-200 transition-all group-hover:shadow-lg group-hover:shadow-amber-200/20">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-amber-200/20 group-hover:border-amber-200 transition-all">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-amber-200">{member.name}</h3>
                                        <p className="text-gray-300">{member.title}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <Footer />
            </div>
        </main>
    );
}