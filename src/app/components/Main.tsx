import Header from "@/app/components/Header";
import Link from "next/link";

export default function Main() {
    return (
            <main className="flex-grow p-4" style={{ backgroundImage: "url(/background.jpg)", backgroundSize: 'cover' }}>
                <Header/>
                <section className="flex flex-col items-center justify-center text-center min-h-[60vh]">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        Tech solutions made easy
                    </h1>
                    <p className="text-lg md:text-2xl mb-10 max-w-xl drop-shadow">
                        fast and effective solutions to all your tech problems - digital wombat is your solution
                    </p>
                    <Link href="/about" passHref>
                    </Link>
                </section>
            </main>
    )
}