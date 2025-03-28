export default function ContactPage() {
    return (
<>
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <hr className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Send us a message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 bg-[#212122] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 bg-[#212122] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 bg-[#212122] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-[#212122] border border-amber-200/20 rounded-lg focus:outline-none focus:border-amber-200 text-gray-300"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-amber-200 text-[#212122] rounded-lg font-medium hover:bg-amber-300 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Contact Information</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-amber-200">Address</h3>
                                <p className="text-gray-300">123 Developer Street<br />Tech Valley, CA 94025</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-amber-200">Email</h3>
                                <p className="text-gray-300">info@developershub.com</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-amber-200">Phone</h3>
                                <p className="text-gray-300">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-amber-200">Office Hours</h3>
                                <p className="text-gray-300">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                                    Saturday: 10:00 AM - 2:00 PM<br />
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
</>
    );
}