"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative flex items-center justify-center"
      >
        <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-muted-foreground font-medium tracking-widest uppercase text-sm"
      >
        Loading
      </motion.p>
    </div>
  );
}
