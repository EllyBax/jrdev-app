'use client';

import { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const sponsorTiers = [
    {
        name: 'Platinum',
        price: '$5000/year',
        color: 'bg-gradient-to-r from-amber-200 to-amber-400',
        benefits: [
            'Premium logo placement on website',
            'Featured in all marketing materials',
            'VIP access to all events',
            'Dedicated support channel',
            'Custom integration opportunities',
            'Priority networking events'
        ]
    },
    {
        name: 'Gold',
        price: '$2500/year',
        color: 'bg-gradient-to-r from-amber-100 to-amber-300',
        benefits: [
            'Prominent logo placement',
            'Access to exclusive events',
            'Marketing material inclusion',
            'Regular support access',
            'Networking opportunities'
        ]
    },
    {
        name: 'Silver',
        price: '$1000/year',
        color: 'bg-gradient-to-r from-gray-300 to-gray-400',
        benefits: [
            'Logo on website',
            'Event invitations',
            'Basic support access',
            'Community recognition'
        ]
    }
];

export default function BecomeSponsorPage() {
    const [selectedTier, setSelectedTier] = useState('');
    const [formData, setFormData] = useState({
        companyName: '',
        website: '',
        contactName: '',
        email: '',
        phone: '',
        logo: null
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', { tier: selectedTier, ...formData });
    };

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
<>
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Become a Sponsor</h1>
                    <p className="text-gray-300 mb-8">
                        Join our community of innovative sponsors and help shape the future of development
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                            <label className="block text-amber-200 font-medium">Select Sponsorship Tier</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {sponsorTiers.map((tier) => (
                                    <div
                                        key={tier.name}
                                        className={`${tier.color} p-4 rounded-lg cursor-pointer transition-all ${
                                            selectedTier === tier.name
                                                ? 'ring-3 ring-amber-800'
                                                : 'hover:ring-2 hover:ring-amber-200/50'
                                        }`}
                                        onClick={() => setSelectedTier(tier.name)}
                                    >
                                        <h3 className="text-[#212122] text-xl font-bold">{tier.name}</h3>
                                        <p className="text-[#212122] font-semibold">{tier.price}</p>
                                        <ul className="mt-4 space-y-2">
                                            {tier.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-2 text-[#212122]">
                                                    <span>✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#212122] p-6 rounded-lg border border-amber-200/20">
                            <h2 className="text-xl font-semibold text-amber-200 mb-6">Company Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="companyName">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="website">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="contactName">
                                        Contact Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contactName"
                                        name="contactName"
                                        value={formData.contactName}
                                        onChange={handleInputChange}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2" htmlFor="logo">
                                        Company Logo
                                    </label>
                                    <input
                                        type="file"
                                        id="logo"
                                        name="logo"
                                        accept="image/*"
                                        onChange={(e) => setFormData(prev => ({ ...prev, logo: e.target.files[0] }))}
                                        className="w-full p-2 bg-[#1a1a1b] border border-amber-200/20 rounded-lg focus:border-amber-200 focus:outline-none text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-200 file:text-[#212122] hover:file:bg-amber-300"
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
                            className="px-8 py-3 bg-amber-200 text-[#212122] rounded-lg font-medium hover:bg-amber-300  cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
</>
    );
}