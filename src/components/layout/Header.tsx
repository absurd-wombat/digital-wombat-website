// src/components/layout/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION_ITEMS, COMPANY_INFO, LAYOUT } from "@/lib/constants";
import { colors } from "@/lib/colors";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${LAYOUT.headerHeight} ${colors.background.section.dark} shadow-lg border-b border-gray-700`}
    >
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image src="/wombat.svg" width={100} height={100} alt="logo" />
          <h1 className={`text-5xl font-bold ml-4 ${colors.text.white}`}>
            {COMPANY_INFO.name}
          </h1>
        </Link>

        <nav>
          <ul className="flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-2xl font-medium text-gray-300 hover:${colors.text.white} transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800`}
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
