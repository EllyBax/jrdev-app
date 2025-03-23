'use client';

import { useParams } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

type MemberLevel = 'NOOB' | 'AMATEUR' | 'INTERMEDIATE' | '10X' | 'CODE NINJA' | 'BYTE WIZARD' | 'TECH GURU' | 'DEBUGGING DEITY';

interface Member {
    id: string;
    name: string;
    email: string;
    phone: string;
    organization: string;
    level: MemberLevel;
    levelProgress: number; // 0-100
}

const members: Member[] = [
    { id: "clr1h2x0g0000jrp9d8m5f6n1", name: "Alice Chen", email: "alice.c@techstart.com", phone: "(555) 123-4567", organization: "TechStart Inc.", level: "NOOB", levelProgress: 15 },
    { id: "clr1h2x0g0001jrp9g7h2k4m8", name: "Bob Smith", email: "bsmith@devco.net", phone: "(555) 234-5678", organization: "DevCo Solutions", level: "AMATEUR", levelProgress: 35 },
    { id: "clr1h2x0g0002jrp9l5n9p6q3", name: "Carol Davis", email: "carol.d@innovate.org", phone: "(555) 345-6789", organization: "Innovate Labs", level: "INTERMEDIATE", levelProgress: 65 },
    { id: "clr1h2x0g0003jrp9r8s4t1v7", name: "David Wilson", email: "d.wilson@codeforge.com", phone: "(555) 456-7890", organization: "CodeForge", level: "10X", levelProgress: 90 },
    { id: "clr1h2x0g0004jrp9w2x7y9z5", name: "Eva Brown", email: "eva.b@techgiant.com", phone: "(555) 567-8901", organization: "TechGiant", level: "CODE NINJA", levelProgress: 85 },
    { id: "clr1h2x0g0005jrp9a4b1c8d6", name: "Frank Zhang", email: "f.zhang@devhub.net", phone: "(555) 678-9012", organization: "DevHub", level: "BYTE WIZARD", levelProgress: 95 },
    { id: "clr1h2x0g0006jrp9e5f2g7h4", name: "Grace Kim", email: "grace.k@innovatech.com", phone: "(555) 789-0123", organization: "InnovaTech", level: "TECH GURU", levelProgress: 88 },
    { id: "clr1h2x0g0007jrp9i8j5k2l9", name: "Henry Patel", email: "h.patel@softworks.org", phone: "(555) 890-1234", organization: "SoftWorks", level: "DEBUGGING DEITY", levelProgress: 98 }
];

const getLevelColor = (level: MemberLevel): string => {
    const colors = {
        'NOOB': 'bg-green-500',
        'AMATEUR': 'bg-blue-500',
        'INTERMEDIATE': 'bg-purple-500',
        '10X': 'bg-amber-500',
        'CODE NINJA': 'bg-red-500',
        'BYTE WIZARD': 'bg-indigo-500',
        'TECH GURU': 'bg-pink-500',
        'DEBUGGING DEITY': 'bg-yellow-500'
    };
    return colors[level];
};

export default function MemberDetailPage() {
    const params = useParams();
    const member = members.find(m => m.id === params.id);

    if (!member) {
        return (
            <main className="min-h-screen">
                <div className="mx-auto max-w-[800px] p-4">
                    <Nav />
                    <div className="text-center py-12">
                        <h1 className="text-3xl font-bold text-amber-200">Member Not Found</h1>
                        <p className="text-gray-300 mt-4">The member you're looking for doesn't exist.</p>
                    </div>
                    <Footer />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <div className="mx-auto max-w-[800px] p-4">
                <Nav />

                <div className="bg-[#212122] p-8 rounded-lg border border-amber-200/20 hover:border-amber-200 transition-all hover:shadow-lg hover:shadow-amber-200/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-amber-200">{member.name}</h1>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-amber-200">Contact Information</h2>
                                    <div className="mt-2 space-y-2">
                                        <p className="text-gray-300">
                                            <span className="font-medium">Email:</span> {member.email}
                                        </p>
                                        <p className="text-gray-300">
                                            <span className="font-medium">Phone:</span> {member.phone}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-amber-200">Organization</h2>
                                    <p className="mt-2 text-gray-300">{member.organization}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-amber-200">Level Progress</h2>
                                <div className="mt-4">
                                    <div className="relative">
                                        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${getLevelColor(member.level)} transition-all duration-300`}
                                                style={{ width: `${member.levelProgress}%` }}
                                            />
                                        </div>
                                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#212122] px-3 py-1 rounded border border-amber-200/20 text-amber-200 text-sm whitespace-nowrap">
                                            {member.level}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-center text-gray-300">
                                        Progress: {member.levelProgress}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
}