import Main from "@/app/components/Main";
import HomepageContent from "@/app/homepage/content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
        <Main Content={HomepageContent}/>
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
            <p>&copy; {new Date().getFullYear()} My Website</p>
        </footer>
    </div>
  );
}
