"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface ButtonProps {
  handleScrollToTop: () => void;
}

export function ScrollTopButton({ handleScrollToTop }: ButtonProps) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <button
        className="transition ease-in-out duration-500 hover:bg-slate-900  bg-[#96B6C5] text-[16px] text-grey-100 flex mx-auto px-[20px] py-[8px] border-b-gray-200"
        onClick={handleScrollToTop}
      >
        go to top
      </button>
    </motion.div>
  );
}
