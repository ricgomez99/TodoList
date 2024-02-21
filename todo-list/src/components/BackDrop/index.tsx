"use client";

import { ComponentWithChildren } from "@/app/types";
import { motion } from "framer-motion";

export default function BackDrop({ children }: ComponentWithChildren) {
  return (
    <motion.div
      className="fixed height-[100%] width-[100%] inset-0 bg-[#000000e1] flex flex-col items-center justify-center overflow-hidden"
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
}
