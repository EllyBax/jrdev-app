'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Nav from '@/app/components/Nav';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Implement actual registration logic here
            console.log('Registration attempt:', formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            router.push('/login'); // Redirect to login page after successful registration
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
      <>
      <Nav/>
        <main className="min-h-[90vh] flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-[#212122] rounded-lg shadow-lg border border-amber-200/20">
                <h1 className="text-2xl font-bold text-center mb-6 text-amber-200">Join jrdev <br />
                  <span className='m-0 text-sm'>
                     - Your Path to Professional Development
                    </span>
                </h1>
                
                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-4 py-2 bg-amber-200 text-[#212122] rounded-lg font-medium hover:bg-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Creating account...' : 'Create account'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-300">
                    Already have an account?{' '}
                    <Link href="/login" className="text-amber-200 hover:text-amber-300 transition-colors">
                        Sign in
                    </Link>
                </div>
            </div>
        </main>
      </>
    );
}