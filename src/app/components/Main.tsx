import Header from "@/app/components/Header";

// Main component should take pageContent as a prop
export default function Main() {
    return (
            <main className="flex-grow p-4" style={{ backgroundImage: "url(/background.jpg)", backgroundSize: 'cover' }}>
                <Header/>
                <h2 className="text-xl font-semibold mb-4">Main Content</h2>
                <p>This is the main section of the homepage.</p>
            </main>
    )
}