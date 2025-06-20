import Main from "@/app/components/Main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Main/>
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
            <p>&copy; {new Date().getFullYear()} My Website</p>
        </footer>
    </div>
  );
}
