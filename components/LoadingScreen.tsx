"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("bc_loaded")) return;
    sessionStorage.setItem("bc_loaded", "1");
    setVisible(true);

    // Animate progress counter 0 → 100
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 4;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => setVisible(false), 400);
      }
      setProgress(count);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[500] bg-[#0A0906] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-white/[0.03]"
              style={{ top: `${20 + i * 15}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            />
          ))}

          {/* Center content */}
          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="font-display text-[clamp(4rem,20vw,9rem)] text-[#F5F2EE] leading-none tracking-widest select-none">
                BC
              </span>
            </motion.div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ originX: 0 }}
              className="h-px w-16 bg-[#C9A96E]"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-sans text-[9px] tracking-[0.55em] uppercase text-[#F5F2EE]/25"
            >
              Interior Designer
            </motion.p>
          </div>

          {/* Progress counter */}
          <div className="absolute bottom-10 left-0 right-0 px-10 md:px-16">
            <div className="flex items-center justify-between mb-3">
              <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-white/20">
                Loading
              </span>
              <span className="font-display text-[clamp(1.2rem,3vw,1.8rem)] text-[#F5F2EE]/60 tabular-nums">
                {String(progress).padStart(3, "0")}
              </span>
            </div>
            {/* Progress track */}
            <div className="h-px w-full bg-white/[0.08]">
              <motion.div
                className="h-full bg-[#C9A96E]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
