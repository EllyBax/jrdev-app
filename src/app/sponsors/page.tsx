"use client";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

const sponsorTiers = [
	{
		name: "Platinum",
		price: "$5000/year",
		color: "bg-gradient-to-r from-amber-200 to-amber-400",
		benefits: [
			"Premium logo placement on website",
			"Featured in all marketing materials",
			"VIP access to all events",
			"Dedicated support channel",
			"Custom integration opportunities",
			"Priority networking events",
		],
		sponsors: [
			{ name: "Tech Giant Corp", logo: "/assets/sponsors/placeholder.svg" },
			{ name: "Innovation Labs", logo: "/assets/sponsors/placeholder.svg" },
		],
	},
	{
		name: "Gold",
		price: "$2500/year",
		color: "bg-gradient-to-r from-amber-100 to-amber-300",
		benefits: [
			"Prominent logo placement",
			"Access to exclusive events",
			"Marketing material inclusion",
			"Regular support access",
			"Networking opportunities",
		],
		sponsors: [
			{ name: "Digital Solutions", logo: "/sponsors/placeholder.svg" },
			{ name: "Future Systems", logo: "/sponsors/placeholder.svg" },
		],
	},
	{
		name: "Silver",
		price: "$1000/year",
		color: "bg-gradient-to-r from-gray-300 to-gray-400",
		benefits: [
			"Logo on website",
			"Event invitations",
			"Basic support access",
			"Community recognition",
		],
		sponsors: [
			{ name: "Dev Tools Inc", logo: "/sponsors/placeholder.svg" },
			{ name: "Code Masters", logo: "/sponsors/placeholder.svg" },
		],
	},
];

export default function SponsorsPage() {
	return (
		<main className="min-h-screen">
			<div className="mx-auto max-w-[1200px] p-4">
				{/* <Nav /> */}

				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-3xl">Our Sponsors</h1>
					<p className="mb-8 text-gray-300">
						Join our community of innovative sponsors and help shape the future
						of development
					</p>
					<a
						href="/become-a-sponsor"
						className="inline-block rounded-lg bg-amber-200 px-8 py-3 font-medium text-[#212122] transition-colors hover:bg-amber-300"
					>
						Become a Sponsor
					</a>
				</div>

				<div className="space-y-16">
					{sponsorTiers.map((tier) => (
						<div
							key={tier.name}
							className="rounded-lg border border-amber-200/20 bg-[#212122] p-8"
						>
							<div className="flex flex-col gap-8 md:flex-row">
								<div className="md:w-1/3">
									<div
										className={`${tier.color} mb-4 rounded-lg p-4 text-[#212122]`}
									>
										<h2 className="font-bold text-2xl">{tier.name}</h2>
										<p className="font-semibold">{tier.price}</p>
									</div>
									<ul className="space-y-2">
										{tier.benefits.map((benefit, index) => (
											<li
												key={index}
												className="flex items-start gap-2 text-gray-300"
											>
												<span className="text-amber-200">✓</span>
												{benefit}
											</li>
										))}
									</ul>
								</div>

								<div className="md:w-2/3">
									<h3 className="mb-6 font-semibold text-amber-200 text-xl">
										{tier.name} Sponsors
									</h3>
									<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
										{tier.sponsors.map((sponsor, index) => (
											<div
												key={index}
												className="rounded-lg border border-amber-200/10 bg-[#1a1a1b] p-6 transition-all hover:border-amber-200/40"
											>
												<div className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-[#212122]">
													<img
														src={sponsor.logo}
														alt={`${sponsor.name} logo`}
														className="max-h-[80%] max-w-[80%] object-contain"
													/>
												</div>
												<h4 className="font-medium text-amber-200 text-lg">
													{sponsor.name}
												</h4>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<Footer />
			</div>
		</main>
	);
}
