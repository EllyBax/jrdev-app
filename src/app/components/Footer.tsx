"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "Contact", url: "/contact" },
	{ name: "Team", url: "/team" },
	{ name: "Members", url: "/members" },
	{ name: "Blog", url: "/blog" },
	{ name: "Sponsors", url: "/sponsors" },
];


export default function Footer() {
	const currentPage = usePathname()
	return (
			<footer className="bottom-0 mx-auto mt-2 w-full text-center">
				<div className="my-6 text-center">
					<span className="text-amber-300">•</span>
				</div>
				<div className="w-full text-center flex flex-wrap justify-center text-gray-300">
					{links.map((link, index) => (
						(link.url !== currentPage) &&
						<Link
							href={link.url}
							key={index}
							className="px-4 py-2 transition-colors hover:text-amber-200">
							[ {link.name} ]
						</Link>
					))}
				</div>
				{/* <div className="my-6 text-center">
				<span className="text-amber-300">•</span>
			</div> */}
				<p className="my-3 text-amber-200">jrdev.org 2025&copy;</p>
			</footer>
	);
}
