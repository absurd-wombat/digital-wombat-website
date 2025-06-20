import Main from "@/app/components/Main";

type PageWrapperProps = {
    Content: React.ComponentType
}

export default function PageWrapper(props: PageWrapperProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Main Content={props.Content}/>
            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                <p>&copy; {new Date().getFullYear()} My Website</p>
            </footer>
        </div>
    );
}
