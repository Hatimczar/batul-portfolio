import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-dark text-[#F5F2EE] py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl mb-3 tracking-widest uppercase">
              Batul Champeli
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#F5F2EE]/50 font-sans">
              Interior Designer · Mumbai
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F2EE]/50 font-sans mb-5">
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
                  className="text-[13px] tracking-wide text-[#F5F2EE]/80 hover:text-[#C9A96E] transition-colors duration-300 font-sans"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#F5F2EE]/50 font-sans mb-5">
              Get in Touch
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="mailto:batulhusain7862@gmail.com"
                aria-label="Email Batul"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[#F5F2EE]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://wa.me/918828275778"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Batul"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[#F5F2EE]/60 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-[#F5F2EE]/50 font-sans tracking-wide">
            © {new Date().getFullYear()} Batul Champeli. All rights reserved.
          </p>
          <p className="text-[11px] text-[#F5F2EE]/50 font-sans tracking-wide">
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
