import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-[#F5F2EE] py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl mb-3 tracking-widest uppercase">
              Batul Champeli
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8C7B6B] font-sans">
              Interior Designer · Mumbai
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8C7B6B] font-sans mb-5">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] tracking-wide text-[#F5F2EE]/70 hover:text-[#C9A96E] transition-colors duration-300 font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#8C7B6B] font-sans mb-5">
              Get in Touch
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="mailto:batulhusain7862@gmail.com"
                aria-label="Email Batul"
                className="flex items-center justify-center w-10 h-10 border border-white/10 text-[#F5F2EE]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/918828275778"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Batul"
                className="flex items-center justify-center w-10 h-10 border border-white/10 text-[#F5F2EE]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-[#8C7B6B] font-sans tracking-wide">
            © {new Date().getFullYear()} Batul Champeli. All rights reserved.
          </p>
          <p className="text-[11px] text-[#8C7B6B] font-sans tracking-wide">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
