"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { FaAngleUp } from "react-icons/fa6";
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
        className="transition ease-in-out duration-500 hover:bg-[#D8D8D8]  bg-[#fff] text-[16px] text-grey-100 flex mx-auto mt-2 px-[20px] py-[8px] border-b-gray-200 rounded-full"
        onClick={handleScrollToTop}
      >
        <FaAngleUp />
      </button>
    </motion.div>
  );
}
