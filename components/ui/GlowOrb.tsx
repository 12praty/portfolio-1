"use client";

import { motion } from "framer-motion";

interface GlowOrbProps {
  className?: string;
}

export default function GlowOrb({ className }: GlowOrbProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      <div className="w-[500px] h-[500px] rounded-full bg-violet-500/20 blur-[120px]" />
    </motion.div>
  );
}
