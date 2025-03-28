"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "/about" },
	{ name: "Contact", url: "/contact" },
	{ name: "Team", url: "/team" },
	{ name: "Members", url: "/members" },
	{ name: "Blog", url: "/blog" },
	{ name: "Sponsors", url: "/sponsors" },
];

export default function Nav() {
	const currentPage = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="sticky top-0 mb-8 backdrop-blur-md">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex cursor-pointer items-center gap-2 text-amber-200 transition-colors hover:text-[#b0b4ba]"
			>
				<span>{"{...pages}"}</span>
				<svg
					className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Dropdown navigation arrow</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-amber-200/20 bg-[#212122] py-2 shadow-lg">
					{links.map(
						(link, index) =>
							link.url !== currentPage && (
								<Link
									key={index}
									href={link.url}
									className="block px-4 py-2 transition-colors hover:bg-amber-200/10"
									onClick={() => setIsOpen(false)}
								>
									{link.name}
								</Link>
							),
					)}
				</div>
			)}
		</div>
	);
}
