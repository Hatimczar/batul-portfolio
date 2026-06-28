"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on first visit per session
    if (sessionStorage.getItem("bc_loaded")) return;
    sessionStorage.setItem("bc_loaded", "1");
    setVisible(true);

    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[300] bg-[#1A1A18] flex flex-col items-center justify-center"
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <span
              className="font-display text-[clamp(4rem,18vw,8rem)] text-[#F5F2EE] leading-none tracking-widest select-none"
              aria-hidden="true"
            >
              BC
            </span>

            {/* Gold rule that draws in */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ originX: 0 }}
              className="block h-px w-20 bg-[#C9A96E]"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#F5F2EE]/40"
            >
              Interior Designer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
