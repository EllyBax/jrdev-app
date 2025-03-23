import Link from "next/link";
import Footer from "./components/Footer";

const links = [
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Team", url: "/team" },
    { name: "Members", url: "/members" },
    { name: "Sponsors", url: "/sponsors" }
];

const projects = [
    { name: "TMS", url: "/projects/task-management" },
    { name: "E-commerce", url: "/projects/ecommerce" },
    { name: "Social Media Dashboard", url: "/projects/social-dashboard" },
    { name: "Weather", url: "/projects/weather-app" },
    { name: "Portfolio Builder", url: "/projects/portfolio" },
    { name: "E-commerce", url: "/projects/ecommerce" },
    { name: "Social Media Dashboard", url: "/projects/social-dashboard" },
    { name: "Weather", url: "/projects/weather-app" },
    { name: "Portfolio Builder", url: "/projects/portfolio" }
];

const socials = [
    { name: "GitHub", url: "https://github.com/jrdev" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jrdev" },
    { name: "Twitter", url: "https://twitter.com/jrdev" },
    { name: "Discord", url: "https://discord.gg/jrdev" }
];

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-[800px] p-4">
                <pre className="w-full text-center font-mon">
                    {`
⣿⣿⣿⣿⣿⣿⣿⣿⢿⡿⣿⣿⢿⣿⣿⣿⣿⢿⣿⣿⡿⣿⣿⣿⣿⡿⣿⣿⡿⣿⣿⣿⣿⣿⡿⣿⣿⢿⡿⣿⣿⡿⣿⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡷⢀⡐⢿⡿⢀⠀⣀⣀⡀⡸⠾⡷⠆⡀⣀⣀⣀⢀⠿⢿⡆⢀⢀⣀⣀⣀⣐⣾⡿⢀⡀⡿⣿⠆⣀⠲⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣟⠠⢌⣿⣿⠡⡈⣿⣟⡇⠤⣹⣿⣁⠌⣽⣿⣭⠠⣸⣿⡅⡡⣩⣿⣿⣿⣿⣿⣿⣄⠠⢻⣿⠣⣀⣽⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠾⠠⠔⣾⡷⠠⠴⠾⠿⠦⠰⣴⡷⠆⠔⠶⡷⠶⠠⢰⢾⠆⠤⠴⠾⠿⠛⢿⣿⣿⠆⠢⢸⣾⠠⠐⣾⣿⣿⣿
⣿⣿⣟⡏⠛⢹⣿⣿⠐⢊⣽⣿⠑⡀⣶⣤⡆⠚⣹⣿⣁⠊⣟⣿⣟⠐⣩⣿⡋⡐⣰⣦⣶⣿⣿⣿⣿⣯⡅⢺⣿⠂⣭⣿⣿⣿⣿
⣿⣿⣿⠇⠒⢸⢾⡷⠐⠢⢾⡷⠐⠄⣿⢾⠆⠒⠴⡷⠆⠂⡿⣟⠾⠐⢰⢾⡇⠐⠴⣷⣿⣿⣿⣿⣿⡷⠆⢺⣿⠂⡷⣿⣿⣿⣿
⣿⣿⣿⣻⣀⠈⠉⠉⠀⣼⣿⣿⠁⡀⣿⣿⡃⢈⣹⣿⡉⠀⠉⠉⠉⠀⣿⣿⡅⡁⠉⠉⠉⠉⢉⣿⣿⣿⣟⠈⠉⣰⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                    `}
                </pre>
                <div className="flex items-center justify-center gap-6 mb-8">
                    <Link href="/login" className="text-[#d5dce6] hover:text-[#0a0a0a] hover:bg-amber-300 bg-amber-400/40 transition-all px-4 py-2 rounded-lg border border-[#363a3f]">
                        Login
                    </Link>
                    <Link href="/register" className="px-4 py-2 bg-[#363a3f] border rounded-lg hover:bg-[#212122] transition-all">
                        Sign Up
                    </Link>
                </div>
                <hr className="my-6" />

                <div className="grid grid-cols-4 gap-2 mb-8">
                    <div className="col-span-1 border-r p-2">
                        <h2 className="text-lg font-semibold mb-2">Pages</h2>
                        <hr className="my-2" />
                        <div className="flex flex-col gap-3">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className="hover:underline transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-2 border-r p-2">
                        <h2 className="text-lg font-semibold mb-2">Projects</h2>
                        <hr className="my-2" />
                        <div className="flex flex-wrap gap-2">
                            {projects.map((project, index) => (
                                <Link
                                    key={index}
                                    href={project.url}
                                    className="px-4 py-2 bg-[#212122] rounded-full border border-transparent hover:border-amber-200 transition-all"
                                >
                                    {project.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 p-2">
                        <h2 className="text-lg font-semibold mb-2">Social</h2>
                        <hr className="my-2" />
                        <div className="flex flex-col gap-3">
                            {socials.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.url}
                                    className="hover:underline transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

<Footer/>
            </div>
        </main>
    );
}