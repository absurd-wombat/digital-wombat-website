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
        <div>
            <header className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image src={"/wombat.svg"} width={100} height={100} alt="logo"/>
                    <h1 className="text-5xl font-bold ml-4">
                        Digital Wombat
                    </h1>
                </Link>
                
                <nav>
                    <ul className="flex items-center space-x-6">
                        {navigationItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    href={item.href} 
                                    className="text-2xl hover:text-blue-600 transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
