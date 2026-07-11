"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

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
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-20 px-6 md:px-12 border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-4">
            Let&apos;s Talk
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-[#1A1A18] mb-6">
            Contact
          </h1>
          <p className="font-sans text-[15px] text-[#8C7B6B] max-w-xl">
            Whether you&apos;re planning a new home, renovating an existing
            space, or designing a commercial interior — I&apos;d love to hear
            about your project.
          </p>
        </div>
      </section>

      {/* ── FORM + CONTACT ────────────────────────────────────── */}
      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {/* Form */}
            <div className="md:col-span-7 glass p-8 md:p-12">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16"
                >
                  <p className="font-display text-3xl text-[#1A1A18] mb-3">
                    Thank you.
                  </p>
                  <p className="font-sans text-[15px] text-[#8C7B6B]">
                    Your message is on its way. I&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full bg-transparent border-b border-[#E8E4DF] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#C4BDB6] transition-colors duration-300"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full bg-transparent border-b border-[#E8E4DF] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#C4BDB6] transition-colors duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-3">
                      Project Type
                    </label>
                    <input
                      type="text"
                      value={form.project}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, project: e.target.value }))
                      }
                      className="w-full bg-transparent border-b border-[#E8E4DF] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#C4BDB6] transition-colors duration-300"
                      placeholder="e.g. 3BHK Residential, Office Interior, Renovation..."
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.25em] uppercase font-sans text-[#8C7B6B] mb-3">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full bg-transparent border-b border-[#E8E4DF] focus:border-[#C9A96E] outline-none py-3 font-sans text-[15px] text-[#1A1A18] placeholder-[#C4BDB6] transition-colors duration-300 resize-none"
                      placeholder="Share your vision, location, approximate timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-[#1A1A18] text-[#F5F2EE] text-[11px] tracking-[0.2em] uppercase font-sans px-10 py-4 hover:bg-[#C9A96E] transition-colors duration-300"
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

            {/* Direct contact */}
            <div className="md:col-span-4 md:col-start-9">
              <div className="glass p-8 md:p-10 space-y-10">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-5">
                    Direct Contact
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <a
                      href="mailto:batulhusain7862@gmail.com"
                      aria-label="Email Batul"
                      className="flex items-center justify-center w-11 h-11 border border-[#E8E4DF] text-[#8C7B6B] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="https://wa.me/918828275778"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp Batul"
                      className="flex items-center justify-center w-11 h-11 border border-[#E8E4DF] text-[#8C7B6B] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors duration-300"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-5">
                    Based In
                  </p>
                  <p className="font-display text-xl text-[#1A1A18]">
                    Mumbai, India
                  </p>
                  <p className="font-sans text-[13px] text-[#8C7B6B] mt-1">
                    Available for projects across Mumbai
                  </p>
                </div>

                <div className="pt-8 border-t border-[#E8E4DF]">
                  <p className="font-sans text-[13px] text-[#8C7B6B] leading-relaxed">
                    I typically respond within 24–48 hours. For urgent
                    enquiries, WhatsApp is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
