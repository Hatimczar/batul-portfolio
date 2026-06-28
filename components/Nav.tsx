"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navBg =
    !isHome || scrolled
      ? "bg-[#F5F2EE]/95 backdrop-blur-sm border-b border-[#E8E4DF]"
      : "bg-transparent";

  const textColor =
    !isHome || scrolled ? "text-[#1A1A18]" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`font-display text-xl md:text-2xl tracking-widest uppercase transition-colors duration-300 ${textColor}`}>
            Batul Champeli
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-sans font-medium transition-colors duration-300 relative group ${textColor}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                    !isHome || scrolled ? "bg-[#C9A96E]" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1A1A18] flex flex-col items-center justify-center gap-10"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-4xl text-[#F5F2EE] tracking-wide hover:text-[#C9A96E] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
