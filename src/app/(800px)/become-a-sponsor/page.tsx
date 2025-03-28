"use client";

import { useState } from "react";

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
	},
];

export default function BecomeSponsorPage() {
	const [selectedTier, setSelectedTier] = useState("");
	const [formData, setFormData] = useState({
		companyName: "",
		website: "",
		contactName: "",
		email: "",
		phone: "",
		logo: null,
	});

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log("Form submitted:", { tier: selectedTier, ...formData });
	};

	const handleInputChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			<div className="mb-12 text-center">
				<h1 className="mb-4 font-bold text-3xl">Become a Sponsor</h1>
				<p className="mb-8 text-gray-300">
					Join our community of innovative sponsors and help shape the future of
					development
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-8">
				<div className="grid grid-cols-1 gap-6">
					<div className="space-y-4">
						<label className="block font-medium text-amber-200">
							Select Sponsorship Tier
						</label>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
							{sponsorTiers.map((tier) => (
								<div
									key={tier.name}
									className={`${tier.color} cursor-pointer rounded-lg p-4 transition-all ${
										selectedTier === tier.name
											? "ring-3 ring-amber-800"
											: "hover:ring-2 hover:ring-amber-200/50"
									}`}
									onClick={() => setSelectedTier(tier.name)}
								>
									<h3 className="font-bold text-[#212122] text-xl">
										{tier.name}
									</h3>
									<p className="font-semibold text-[#212122]">{tier.price}</p>
									<ul className="mt-4 space-y-2">
										{tier.benefits.map((benefit, index) => (
											<li
												key={index}
												className="flex items-start gap-2 text-[#212122]"
											>
												<span>✓</span>
												{benefit}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					<div className="rounded-lg border border-amber-200/20 bg-[#212122] p-6">
						<h2 className="mb-6 font-semibold text-amber-200 text-xl">
							Company Information
						</h2>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label
									className="mb-2 block text-gray-300"
									htmlFor="companyName"
								>
									Company Name
								</label>
								<input
									type="text"
									id="companyName"
									name="companyName"
									value={formData.companyName}
									onChange={handleInputChange}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-gray-300" htmlFor="website">
									Website
								</label>
								<input
									type="url"
									id="website"
									name="website"
									value={formData.website}
									onChange={handleInputChange}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
							<div>
								<label
									className="mb-2 block text-gray-300"
									htmlFor="contactName"
								>
									Contact Name
								</label>
								<input
									type="text"
									id="contactName"
									name="contactName"
									value={formData.contactName}
									onChange={handleInputChange}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-gray-300" htmlFor="email">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-gray-300" htmlFor="phone">
									Phone
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									value={formData.phone}
									onChange={handleInputChange}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
							<div>
								<label className="mb-2 block text-gray-300" htmlFor="logo">
									Company Logo
								</label>
								<input
									type="file"
									id="logo"
									name="logo"
									accept="image/*"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											logo: e.target.files[0],
										}))
									}
									className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] p-2 text-gray-300 file:mr-4 file:rounded-full file:border-0 file:bg-amber-200 file:px-4 file:py-2 file:font-semibold file:text-[#212122] file:text-sm hover:file:bg-amber-300 focus:border-amber-200 focus:outline-none"
									required
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<button
						type="submit"
						disabled={!selectedTier}
						className="cursor-pointer rounded-lg bg-amber-200 px-8 py-3 font-medium text-[#212122] transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
					>
						Submit Application
					</button>
				</div>
			</form>
		</>
	);
}
