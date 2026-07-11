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
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setPastHero(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : isHome && scrolled && !pastHero
    ? "glass-nav-dark"
    : "glass-nav";

  const textColor = (isHome && !scrolled) || (isHome && scrolled && !pastHero)
    ? "text-white"
    : "text-[#1A1A18]";

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
                <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${isHome && !scrolled ? "bg-white" : "bg-[#C9A96E]"}`} />
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
            className="fixed inset-0 z-40 glass-menu flex flex-col justify-between px-8 pt-28 pb-12 md:hidden"
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
                <a href="mailto:batulhusain7862@gmail.com" aria-label="Email Batul" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://wa.me/918828275778" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Batul" className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
