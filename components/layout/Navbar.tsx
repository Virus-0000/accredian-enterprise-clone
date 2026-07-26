"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Stats", href: "#stats" },
  { label: "Clients", href: "#clients" },
  { label: "Accredian Edge", href: "#edge" },
  { label: "CAT", href: "#cat" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-5 lg:px-6">
        {/* Brand Logo with tagline */}
        <a href="#" className="flex flex-col group focus:outline-none select-none" aria-label="Accredian Home">
          <span className="text-[30px] font-black text-[#1B76FF] tracking-tight leading-none">
            accredian
          </span>
          <span className="text-[10px] font-semibold text-gray-500 tracking-[0.06em] uppercase mt-0.5 group-hover:text-gray-700 transition-colors">
            credentials that matter
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-6 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#1B76FF]"
                    : "text-gray-800 hover:text-[#1B76FF]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#1B76FF] transition-all duration-300" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-2xl text-gray-700 hover:bg-gray-100 focus:outline-none lg:hidden transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-50/80 text-[#1B76FF]"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#1B76FF]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}