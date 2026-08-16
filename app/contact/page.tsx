"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Enquiry — ${form.project || "New Project"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:batulhusain7862@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="bg-[#0A0906] pt-32 pb-24 px-8 md:px-16 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E]/60">
              Let&apos;s Talk
            </span>
          </div>
          <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-[#F5F2EE] mb-10">
            Contact
          </h1>
          <p className="font-sans text-[15px] leading-[1.85] text-white/40 max-w-lg">
            Whether you&apos;re planning a new home, renovating an existing
            space, or designing a commercial interior — I&apos;d love to hear
            about your project.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTACT INFO ─────────────────────────────────── */}
      <section className="bg-[#F5F2EE] py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 md:gap-24">
          {/* Form — 7 cols */}
          <div className="md:col-span-7" data-reveal>
            {sent ? (
              <div className="py-16">
                <p className="font-display text-[clamp(2rem,4vw,3.4rem)] text-[#1A1A18] leading-tight mb-4">
                  Thank you.
                </p>
                <p className="font-sans text-[15px] text-[#8C7B6B]">
                  Your message is on its way. I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full bg-transparent border-b border-[#1A1A18]/[0.15] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#1A1A18]/25 transition-colors duration-300"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full bg-transparent border-b border-[#1A1A18]/[0.15] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#1A1A18]/25 transition-colors duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                    Project Type
                  </label>
                  <input
                    type="text"
                    value={form.project}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, project: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-[#1A1A18]/[0.15] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#1A1A18]/25 transition-colors duration-300"
                    placeholder="e.g. 3BHK Residential, Office Interior, Renovation..."
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
                    Tell Me About Your Project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full bg-transparent border-b border-[#1A1A18]/[0.15] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#1A1A18]/25 transition-colors duration-300 resize-none"
                    placeholder="Share your vision, location, approximate timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-[#1A1A18] text-[#F5F2EE] text-[10px] tracking-[0.3em] uppercase font-sans px-10 py-5 hover:bg-[#C9A96E] transition-colors duration-300"
                >
                  Send Message
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </form>
            )}
          </div>

          {/* Contact info — 4 cols */}
          <div className="md:col-span-4 md:col-start-9 md:pt-2">
            <div className="space-y-0" data-reveal data-reveal-delay="1">
              {/* Direct */}
              <div className="pb-10 border-b border-[#1A1A18]/[0.08]">
                <p className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E] mb-6">
                  Direct
                </p>
                <a
                  href="mailto:batulhusain7862@gmail.com"
                  className="group flex items-center gap-4 font-display text-[1.5rem] leading-none text-[#1A1A18] hover:text-[#C9A96E] transition-colors duration-300 mb-5"
                >
                  Email
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href="https://wa.me/918828275778"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 font-display text-[1.5rem] leading-none text-[#1A1A18] hover:text-[#C9A96E] transition-colors duration-300"
                >
                  WhatsApp
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Location */}
              <div className="py-10 border-b border-[#1A1A18]/[0.08]">
                <p className="text-[9px] tracking-[0.5em] uppercase font-sans text-[#C9A96E] mb-4">
                  Based In
                </p>
                <p className="font-display text-[1.5rem] leading-none text-[#1A1A18] mb-2">
                  Mumbai, India
                </p>
                <p className="font-sans text-[13px] text-[#8C7B6B] mt-2">
                  Available for projects across Mumbai
                </p>
              </div>

              {/* Response time */}
              <div className="pt-10">
                <p className="font-sans text-[13px] leading-[1.85] text-[#8C7B6B]">
                  I typically respond within 24–48 hours. For urgent enquiries,
                  WhatsApp is the fastest way to reach me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
