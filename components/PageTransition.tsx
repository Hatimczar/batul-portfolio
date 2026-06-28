"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition() {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => { setKey(pathname); }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 1, originY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[200] bg-[#1A1A18] pointer-events-none"
      />
    </AnimatePresence>
  );
}
