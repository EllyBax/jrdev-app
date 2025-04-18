"use client";

import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			// TODO: Implement actual login logic here
			console.log("Login attempt:", formData);
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));
			router.push("/"); // Redirect to home page after successful login
		} catch (err) {
			setError("Invalid email or password");
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			{/* <Nav /> */}
			<main className="flex min-h-[80vh] items-center justify-center">
				<div className="w-full max-w-md rounded-lg border border-amber-200/20 bg-[#212122] p-6 shadow-lg">
					<h1 className="mb-6 text-center font-bold text-2xl text-amber-200">
						Welcome Back to jrdev
					</h1>

					{error && (
						<div className="mb-4 rounded border border-red-500/50 bg-red-500/10 p-3 text-red-500 text-sm">
							{error}
						</div>
					)}

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="mb-1 block font-medium text-gray-300 text-sm"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="mb-1 block font-medium text-gray-300 text-sm"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
								className="w-full rounded-lg border border-amber-200/20 bg-[#1a1a1b] px-4 py-2 text-gray-300 focus:border-amber-200 focus:outline-none"
								required
							/>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className="w-full rounded-lg bg-amber-200 px-4 py-2 font-medium text-[#212122] transition-colors hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
						>
							{isLoading ? "Signing in..." : "Sign in"}
						</button>
					</form>

					<div className="mt-6 text-center text-gray-300 text-sm">
						Don't have an account?{" "}
						<Link
							href="/register"
							className="text-amber-200 transition-colors hover:text-amber-300"
						>
							Sign up
						</Link>
					</div>
				</div>
			</main>
				<Footer/>
		</>
	);
}
