"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

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
      <section className="pt-36 pb-20 px-6 md:px-12 border-b border-[#E8E4DF]">
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
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {/* Form */}
            <div className="md:col-span-7">
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
              <div className="space-y-10">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-[#8C7B6B] mb-5">
                    Direct Contact
                  </p>
                  <div className="space-y-5">
                    <a
                      href="mailto:batulhusain7862@gmail.com"
                      className="flex items-start gap-4 group"
                    >
                      <Mail
                        size={16}
                        className="text-[#C9A96E] mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B] mb-1">
                          Email
                        </p>
                        <p className="font-sans text-[14px] text-[#1A1A18] group-hover:text-[#C9A96E] transition-colors duration-300 break-all">
                          batulhusain7862@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/917977582354"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <MessageCircle
                        size={16}
                        className="text-[#C9A96E] mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase font-sans text-[#8C7B6B] mb-1">
                          WhatsApp
                        </p>
                        <p className="font-sans text-[14px] text-[#1A1A18] group-hover:text-[#C9A96E] transition-colors duration-300">
                          +91 79775 82354
                        </p>
                      </div>
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
