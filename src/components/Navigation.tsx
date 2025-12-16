"use client";

import Link from "next/link";
import { useState } from "react";
import { LanternIcon, MenuIcon, CloseIcon, ChevronRightIcon } from "@/components/icons/GameIcons";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Beginner's Guide", href: "/guides/beginners" },
  {
    name: "Classes",
    href: "/classes",
    children: [
      { name: "Berserker", href: "/classes/berserker" },
      { name: "Mage", href: "/classes/mage" },
      { name: "Hunter", href: "/classes/hunter" },
      { name: "Shield Guard", href: "/classes/shield-guard" },
      { name: "Useless Person", href: "/classes/useless-person" },
    ],
  },
  { name: "Combat", href: "/guides/combat" },
  { name: "Bosses", href: "/bosses" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/95 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="NC Guide - Netherworld Covenant Home">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-800 flex items-center justify-center shadow-lg shadow-purple-900/50 group-hover:shadow-purple-600/50 transition-all">
              <LanternIcon size={22} className="text-purple-200" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
                NC Guide
              </span>
              <span className="block text-[10px] text-purple-400/60 -mt-1 tracking-widest uppercase">
                Netherworld Covenant
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-1">
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 py-2 bg-[#12121f] border border-purple-900/40 rounded-lg shadow-xl shadow-purple-900/20">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-purple-400 hover:bg-purple-900/20 transition-colors font-medium"
                      >
                        All Classes
                      </Link>
                      <div className="border-t border-purple-900/30 my-1" />
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-purple-900/20 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-purple-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a12] border-t border-purple-900/30 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-3 text-gray-300 hover:text-purple-400 transition-colors rounded-lg hover:bg-purple-900/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                  {item.children && <ChevronRightIcon size={16} className="text-gray-400" />}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 border-l border-purple-900/30 ml-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
