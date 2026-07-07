"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home", num: "01" },
  { href: "/projects", label: "Projects", num: "02" },
  { href: "/about", label: "About", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg =
    !isHome || scrolled
      ? "bg-[#F5F2EE]/95 backdrop-blur-sm border-b border-[#E8E4DF]"
      : "bg-transparent";

  const textColor = !isHome || scrolled ? "text-[#1A1A18]" : "text-white";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className={`font-display text-xl md:text-2xl tracking-widest uppercase transition-colors duration-300 ${menuOpen ? "text-white" : textColor}`}
          >
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
                <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${!isHome || scrolled ? "bg-[#C9A96E]" : "bg-white"}`} />
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`md:hidden z-[60] relative transition-colors duration-300 ${menuOpen ? "text-white" : textColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#1A1A18] flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
          >
            {/* Nav items */}
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-end justify-between border-b border-white/10 py-5"
                  >
                    <span className="font-display text-[clamp(2.2rem,10vw,3.5rem)] text-white leading-none group-hover:text-[#C9A96E] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="font-sans text-[11px] tracking-[0.2em] text-white/30 mb-1">
                      {link.num}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-white/30">Get in Touch</p>
              <div className="flex items-center gap-4 mt-1">
                <a href="mailto:batulhusain7862@gmail.com" aria-label="Email Batul" className="flex items-center justify-center w-10 h-10 border border-white/10 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://wa.me/918828275778" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Batul" className="flex items-center justify-center w-10 h-10 border border-white/10 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
