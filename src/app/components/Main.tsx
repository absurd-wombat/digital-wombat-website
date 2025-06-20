import Header from "@/app/components/Header";
import HomepageContent from "@/app/homepage/content";

export default function Main() {
    return (
            <main className="flex-grow p-4" style={{ backgroundImage: "url(/background.jpg)", backgroundSize: 'cover' }}>
                <Header/>
                <HomepageContent/>
            </main>
    )
}