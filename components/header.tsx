"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { href: "#inicio", label: "início" },
  { href: "#sobre", label: "sobre" },
  { href: "#portfolio", label: "portfólio" },
  { href: "#habilidades", label: "habilidades" },
  { href: "#contato", label: "contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/35 backdrop-blur-md border-b border-white/10">
      <nav className="h-14 w-full flex items-center justify-between max-w-[80vw] mx-auto">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="text-indigo-50 font-jet font-bold text-lg tracking-tight hover:opacity-80 transition"
        >
          Luis Mackiewicz
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-jet font-semibold transition ${
                  activeSection === href.slice(1)
                    ? "text-indigo-400"
                    : "text-indigo-50/70 hover:text-indigo-50"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-indigo-50 p-2 hover:opacity-80 transition"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col items-center py-4">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="w-full text-center">
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className={`block py-3 text-lg font-jet font-semibold transition ${
                      activeSection === href.slice(1)
                        ? "text-indigo-400"
                        : "text-indigo-50/70 hover:text-indigo-50"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
