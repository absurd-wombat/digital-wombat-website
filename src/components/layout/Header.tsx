// src/components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAVIGATION_ITEMS, COMPANY_INFO, LAYOUT } from "@/lib/constants";
import { colors } from "@/lib/colors";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${colors.background.section.dark} shadow-lg border-b border-gray-700`}
    >
      <div
        className={`container mx-auto p-4 ${LAYOUT.headerHeight} flex flex-col justify-center`}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Logo4.png"
              width={80}
              height={80}
              alt="logo"
              className="md:w-[140px] md:h-[140px]"
            />
            <h1
              className={`text-2xl md:text-5xl font-bold ml-2 md:ml-4 ${colors.text.white}`}
            >
              {COMPANY_INFO.name}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-2xl font-medium text-gray-300 hover:${colors.text.white} transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800 whitespace-nowrap`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block text-xl font-medium text-gray-300 hover:${colors.text.white} transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
