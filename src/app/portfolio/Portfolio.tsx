import Link from 'next/link';

export default function Portfolio() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-indigo-100">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
                    Our Portfolio
                </h1>
                <p className="text-lg md:text-2xl mb-10 max-w-3xl text-gray-600">
                    Explore our latest projects and see how we've helped businesses transform their digital presence
                </p>
            </section>

            {/* Portfolio Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                        Featured Projects
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🌐</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">E-Commerce Platform</h3>
                                <p className="text-gray-600 mb-4">
                                    A modern, responsive e-commerce solution built with Next.js and integrated payment processing.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Stripe</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                                <div className="text-white text-6xl">📱</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Mobile Banking App</h3>
                                <p className="text-gray-600 mb-4">
                                    A secure mobile banking application with real-time transactions and biometric authentication.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React Native</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🏢</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Corporate Dashboard</h3>
                                <p className="text-gray-600 mb-4">
                                    A comprehensive business intelligence dashboard with real-time analytics and reporting.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">D3.js</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        {/* Project 4 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🎨</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Creative Agency Website</h3>
                                <p className="text-gray-600 mb-4">
                                    A stunning portfolio website for a creative agency with smooth animations and modern design.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Framer Motion</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🔧</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">SaaS Platform</h3>
                                <p className="text-gray-600 mb-4">
                                    A comprehensive SaaS solution with user management, billing, and API integrations.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Express</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">AWS</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>

                        {/* Project 6 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                                <div className="text-white text-6xl">🚀</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Startup MVP</h3>
                                <p className="text-gray-600 mb-4">
                                    A rapid prototype and MVP development for an innovative startup idea with user feedback integration.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">React</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Stripe</span>
                                </div>
                                <Link 
                                    href="/contact" 
                                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                >
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                        Our Impact
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                            <div className="text-gray-600">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
                            <div className="text-gray-600">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
                        Let's create something amazing together. Get in touch to discuss your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/contact" 
                            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Start a Project
                        </Link>
                        <Link 
                            href="/" 
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
