'use client';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
        ],
        sponsors: [
            { name: 'Tech Giant Corp', logo: '/sponsors/placeholder.svg' },
            { name: 'Innovation Labs', logo: '/sponsors/placeholder.svg' }
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
        ],
        sponsors: [
            { name: 'Digital Solutions', logo: '/sponsors/placeholder.svg' },
            { name: 'Future Systems', logo: '/sponsors/placeholder.svg' }
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
        ],
        sponsors: [
            { name: 'Dev Tools Inc', logo: '/sponsors/placeholder.svg' },
            { name: 'Code Masters', logo: '/sponsors/placeholder.svg' }
        ]
    }
];

export default function SponsorsPage() {
    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-[1200px] p-4">
                <Nav />

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4">Our Sponsors</h1>
                    <p className="text-gray-300 mb-8">Join our community of innovative sponsors and help shape the future of development</p>
                    <a
                        href="/become-a-sponsor"
                        className="inline-block px-8 py-3 bg-amber-200 text-[#212122] rounded-lg font-medium hover:bg-amber-300 transition-colors"
                    >
                        Become a Sponsor
                    </a>
                </div>

                <div className="space-y-16">
                    {sponsorTiers.map((tier) => (
                        <div key={tier.name} className="bg-[#212122] p-8 rounded-lg border border-amber-200/20">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <div className={`${tier.color} text-[#212122] p-4 rounded-lg mb-4`}>
                                        <h2 className="text-2xl font-bold">{tier.name}</h2>
                                        <p className="font-semibold">{tier.price}</p>
                                    </div>
                                    <ul className="space-y-2">
                                        {tier.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2 text-gray-300">
                                                <span className="text-amber-200">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="md:w-2/3">
                                    <h3 className="text-xl font-semibold text-amber-200 mb-6">{tier.name} Sponsors</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {tier.sponsors.map((sponsor, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#1a1a1b] p-6 rounded-lg border border-amber-200/10 hover:border-amber-200/40 transition-all"
                                            >
                                                <div className="aspect-video bg-[#212122] rounded-lg mb-4 flex items-center justify-center">
                                                    <img
                                                        src={sponsor.logo}
                                                        alt={`${sponsor.name} logo`}
                                                        className="max-w-[80%] max-h-[80%] object-contain"
                                                    />
                                                </div>
                                                <h4 className="text-lg font-medium text-amber-200">{sponsor.name}</h4>
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