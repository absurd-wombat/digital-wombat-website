export default function Contact() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Contact Information */}
            <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                    Contact Us
                </h1>
                <p className="text-lg md:text-2xl mb-12 max-w-3xl text-gray-600">
                    Ready to bring your ideas to life? Let's discuss your next project and see how we can help you achieve your goals.
                </p>
                
                {/* Contact Information Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">
                    {/* Email Contact */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="text-indigo-600 text-2xl">📧</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Email Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Send us an email and we'll get back to you within 24 hours.
                            </p>
                            <a 
                                href="mailto:hello@absurdwombat.com" 
                                className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                            >
                                hello@absurdwombat.com
                            </a>
                        </div>
                    </div>

                    {/* Phone Contact */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="text-indigo-600 text-2xl">📞</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Call Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Prefer to talk? Give us a call during business hours.
                            </p>
                            <a 
                                href="tel:+1234567890" 
                                className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                            >
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>

                    {/* Office Visit */}
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <div className="text-indigo-600 text-2xl">🏢</div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-800">Visit Us</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Come visit our office for a face-to-face discussion.
                            </p>
                            <p className="text-indigo-600 font-semibold text-sm">
                                123 Business St<br />
                                Suite 100<br />
                                City, State 12345
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}