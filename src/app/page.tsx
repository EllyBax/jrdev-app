import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";

const links = [
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "Team", url: "/team" },
  { name: "Members", url: "/members" },
  { name: "Blog", url: "/blog" },
  { name: "Sponsors", url: "/sponsors" },
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
  { name: "Portfolio Builder", url: "/projects/portfolio" },
];

const socials = [
  { name: "GitHub", url: "https://github.com/jrdev" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jrdev" },
  { name: "Twitter", url: "https://twitter.com/jrdev" },
  { name: "Discord", url: "https://discord.gg/jrdev" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#d5dce6]">
      <div className="mx-auto max-w-[800px] p-4">
        <Image
          alt={"Jrdev logo"}
          src={"/jrdev-logo-no-bg.png"}
          height={150}
          width={500}
          className="mx-auto object-fill"
        />
        <div className="mb-8 flex items-center justify-center gap-6">
          <Link
            href="/login"
            className="rounded-lg border border-[#363a3f] px-4 py-2 text-[#d5dce6] transition-all hover:bg-amber-300 hover:text-[#0a0a0a]"
          >
            [ Login ]
          </Link>
          <Link
            href="/register"
            className="rounded-lg border bg-[#363a3f] px-4 py-2 text-[#d5dce6] transition-all hover:bg-amber-300 hover:text-[#0a0a0a]"
          >
            [ Sign Up ]
          </Link>
        </div>
        
        <div className="my-6 text-center">
          <span className="text-amber-300">•</span>
        </div>
        
        <div className="mb-8 grid grid-cols-4 gap-2">
          <div className="col-span-1 p-2">
            <h2 className="mb-2 font-semibold text-lg">Pages</h2>
            <hr className="my-2 border-[#363a3f]" />
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="transition-all hover:text-amber-300"
                >
                  [ {link.name} ]
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 p-2">
            <h2 className="mb-2 font-semibold text-lg">Projects</h2>
            <hr className="my-2 border-[#363a3f]" />
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                <Link
                  key={`${project.name}-${Math.random()}`}
                  href={project.url}
                  className="rounded-full border border-transparent bg-[#212122] px-4 py-2 transition-all  hover:border-amber-200/40 hover:bg-linear-120 from-amber-200/30 to-amber-100/20 hover:text-amber-300"
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 p-2">
            <h2 className="mb-2 font-semibold text-lg">Social</h2>
            <hr className="my-2 border-[#363a3f]" />
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="transition-all hover:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ {social.name} ]
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="my-6 text-center">
          <span className="text-amber-300">•</span>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}