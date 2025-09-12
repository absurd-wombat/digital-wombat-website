import Image from 'next/image'
import Link from 'next/link'

// Define the navigation items
const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg border-b border-gray-700">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image src={"/wombat.svg"} width={100} height={100} alt="logo"/>
                    <h1 className="text-5xl font-bold ml-4 text-white">
                        Digital Wombat
                    </h1>
                </Link>
                
                <nav>
                    <ul className="flex items-center space-x-6">
                        {navigationItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    href={item.href} 
                                    className="text-2xl font-medium text-gray-300 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
