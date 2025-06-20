import Header from "@/app/components/Header";

type MainProps = {
    Content: React.ComponentType
}

export default function Main({Content}: MainProps) {
    return (
            <main className="flex-grow p-4" style={{ backgroundImage: "url(/background.jpg)", backgroundSize: 'cover' }}>
                <Header/>
                <Content/>
            </main>
    )
}