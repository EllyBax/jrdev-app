import Link from "next/link";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const teamMembers = [
    {
        id: 1,
        name: "John Smith",
        title: "Lead Developer",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        bio: "Passionate about building scalable applications and mentoring junior developers. Over 10 years of experience in full-stack development.",
        socials: {
            github: "https://github.com/johnsmith",
            linkedin: "https://linkedin.com/in/johnsmith",
            twitter: "https://twitter.com/johnsmith"
        },
        projects: [
            "Led development of cloud-native microservices architecture",
            "Created an open-source developer productivity toolkit"
        ],
        hobbies: ["Rock climbing", "Playing guitar", "Contributing to open source"]
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        bio: "Creative designer focused on crafting intuitive and accessible user experiences. Advocate for user-centered design principles.",
        socials: {
            dribbble: "https://dribbble.com/sarahjohnson",
            linkedin: "https://linkedin.com/in/sarahjohnson",
            behance: "https://behance.net/sarahjohnson"
        },
        projects: [
            "Redesigned major e-commerce platform increasing conversion by 40%",
            "Created design system used by 50+ developers"
        ],
        hobbies: ["Digital illustration", "Photography", "Interior design"]
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Backend Engineer",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        bio: "Performance optimization specialist with a focus on distributed systems and database design.",
        socials: {
            github: "https://github.com/michaelchen",
            linkedin: "https://linkedin.com/in/michaelchen",
            medium: "https://medium.com/@michaelchen"
        },
        projects: [
            "Optimized database performance reducing query time by 70%",
            "Implemented real-time analytics processing pipeline"
        ],
        hobbies: ["Chess", "Machine learning", "Hiking"]
    },
    {
        id: 4,
        name: "Emily Davis",
        title: "Project Manager",
        image: "https://randomuser.me/api/portraits/women/21.jpg",
        bio: "Agile enthusiast with a track record of delivering complex projects on time and within budget.",
        socials: {
            linkedin: "https://linkedin.com/in/emilydavis",
            twitter: "https://twitter.com/emilydavis"
        },
        projects: [
            "Led successful migration of legacy system to microservices",
            "Implemented agile methodologies across 5 development teams"
        ],
        hobbies: ["Yoga", "Book club hosting", "Marathon running"]
    },
    {
        id: 5,
        name: "David Wilson",
        title: "Full Stack Developer",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        bio: "Full stack developer with expertise in React and Node.js. Passionate about creating seamless web applications.",
        socials: {
            github: "https://github.com/davidwilson",
            linkedin: "https://linkedin.com/in/davidwilson",
            codepen: "https://codepen.io/davidwilson"
        },
        projects: [
            "Built real-time collaboration platform using WebSocket",
            "Developed popular React component library"
        ],
        hobbies: ["Game development", "Playing basketball", "Blogging about tech"]
    },
    {
        id: 6,
        name: "Lisa Anderson",
        title: "DevOps Engineer",
        image: "https://randomuser.me/api/portraits/women/36.jpg",
        bio: "Infrastructure automation expert specializing in cloud technologies and continuous deployment.",
        socials: {
            github: "https://github.com/lisaanderson",
            linkedin: "https://linkedin.com/in/lisaanderson",
            twitter: "https://twitter.com/lisaanderson"
        },
        projects: [
            "Implemented zero-downtime deployment pipeline",
            "Reduced cloud infrastructure costs by 35%"
        ],
        hobbies: ["Cloud architecture", "Teaching tech workshops", "Gardening"]
    }
];

export default function TeamPage({ params }: { params: { id: string } }) {
    const member = teamMembers.find(m => m.id === parseInt(params.id))

    if (!member) {
        return (
            <div className="flex items-center justify-center">
                <div className="bg-[#212122] p-8 rounded-lg border border-amber-200/20 hover:border-amber-200 transition-all hover:shadow-lg hover:shadow-amber-200/20 text-center">
                    <h2 className="text-2xl font-semibold text-amber-200 mb-2">Member Not Found</h2>
                    <p className="text-gray-300">The team member you're looking for doesn't exist.</p>
                    <Link href="/team" className="inline-block mt-6 px-6 py-2 bg-amber-200/10 text-amber-200 rounded-full hover:bg-amber-200/20 transition-all">
                        View All Team Members
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Team Member</h1>
            <hr className="my-6" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div
                    key={member.id}
                    className="bg-[#212122] p-6 rounded-lg border border-transparent hover:border-amber-200 transition-all hover:shadow-lg hover:shadow-amber-200/20 w-[750px]"
                >
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col items-center text-center md:w-1/3">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-amber-200/20 hover:border-amber-200 transition-all mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-200">{member.name}</h3>
                            <p className="text-gray-300">{member.title}</p>
                            <div className="flex gap-3 mt-4">
                                {Object.entries(member.socials).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-200 hover:text-gray-400 transition-colors"
                                    >
                                        <span className="capitalize">{platform}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-2/3 space-y-4">
                            <p className="text-gray-300">{member.bio}</p>

                            <div>
                                <h4 className="text-amber-200 font-semibold mb-2">Notable Projects</h4>
                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                    {member.projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-amber-200 font-semibold mb-2">Hobbies & Interests</h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.hobbies.map((hobby, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-amber-200/10 text-amber-200 rounded-full text-sm"
                                        >
                                            {hobby}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}