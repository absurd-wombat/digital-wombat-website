import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <header className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image src={"/wombat.svg"} width={100} height={100} alt="logo"/>
                    <h1 className="text-5xl font-bold ml-4">
                        digital wombat
                    </h1>
                </Link>
                
                <nav>
                    <ul className="flex items-center space-x-4">
                        <li><a href="/contact" className="text-2xl">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
