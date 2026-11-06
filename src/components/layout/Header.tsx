"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAVIGATION_ITEMS, COMPANY_INFO, LAYOUT } from "@/lib/constants";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/80">
      <div
        className={`container mx-auto px-4 ${LAYOUT.headerHeight} flex flex-col justify-center`}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Digital Wombat logo"
              className="w-10 h-10"
            />
            <h1 className="text-lg font-semibold tracking-tight text-gray-900 ml-3">
              {COMPANY_INFO.name}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
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
          <nav className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100"
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
