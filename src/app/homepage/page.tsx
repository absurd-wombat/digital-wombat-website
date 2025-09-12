import Link from 'next/link';

export default function Homepage() {
    
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">
                        Digital Wombat
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 text-gray-600 max-w-3xl mx-auto">
                        Innovative tech solutions that transform ideas into reality
                    </p>
                    <p className="text-lg md:text-xl mb-12 text-gray-500 max-w-2xl mx-auto">
                        Fast, effective, and reliable development services for modern businesses
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/portfolio" 
                            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                        >
                            View Portfolio
                        </Link>
                        <Link 
                            href="/contact" 
                            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
                        What We Do
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Development</h3>
                            <p className="text-gray-600">
                                Modern, responsive websites and web applications built with cutting-edge technologies
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Mobile Apps</h3>
                            <p className="text-gray-600">
                                Cross-platform mobile applications that deliver exceptional user experiences
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Tech Consulting</h3>
                            <p className="text-gray-600">
                                Strategic technology guidance to help your business grow and scale efficiently
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
                        About Digital Wombat
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        We're passionate about creating digital solutions that make a difference. 
                        With expertise in modern web technologies and a focus on user experience, 
                        we help businesses and individuals bring their ideas to life.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                            <div className="text-gray-600">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                            <div className="text-gray-600">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support Available</div>
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
                        Let's discuss how we can help bring your vision to life with innovative technology solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/portfolio" 
                            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            View Our Work
                        </Link>
                        <Link 
                            href="/contact" 
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}