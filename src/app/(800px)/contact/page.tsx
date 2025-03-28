export default function ContactPage() {
	return (
		<>
			<h1 className="mb-4 font-bold text-3xl">Contact Us</h1>
			<hr className="my-6" />

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{/* Contact Form */}
				<div className="space-y-4">
					<h2 className="font-semibold text-xl">Send us a message</h2>
					<form className="space-y-4">
						<div>
							<label htmlFor="name" className="mb-1 block font-medium text-sm">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>
						<div>
							<label htmlFor="email" className="mb-1 block font-medium text-sm">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="mb-1 block font-medium text-sm"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="w-full rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="mb-1 block font-medium text-sm"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="w-full rounded-lg border border-amber-200/20 bg-[#212122] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-lg bg-amber-200 px-4 py-2 font-medium text-[#212122] transition-colors hover:bg-amber-300"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Information */}
				<div className="space-y-6">
					<h2 className="font-semibold text-xl">Contact Information</h2>
					<div className="space-y-4">
						<div>
							<h3 className="font-medium text-amber-200 text-lg">Address</h3>
							<p className="text-gray-300">
								123 Developer Street
								<br />
								Tech Valley, CA 94025
							</p>
						</div>
						<div>
							<h3 className="font-medium text-amber-200 text-lg">Email</h3>
							<p className="text-gray-300">info@developershub.com</p>
						</div>
						<div>
							<h3 className="font-medium text-amber-200 text-lg">Phone</h3>
							<p className="text-gray-300">+1 (555) 123-4567</p>
						</div>
						<div>
							<h3 className="font-medium text-amber-200 text-lg">
								Office Hours
							</h3>
							<p className="text-gray-300">
								Monday - Friday: 9:00 AM - 6:00 PM
								<br />
								Saturday: 10:00 AM - 2:00 PM
								<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
