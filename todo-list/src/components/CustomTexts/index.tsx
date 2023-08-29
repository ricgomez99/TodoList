"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";
import { ReactComponentElement } from "react";

interface Data {
  title: string | ReactComponentElement<any> | any;
  textStyles: string;
}

export const TypingText = ({ title, textStyles }: Data) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-gray ${textStyles}`}
  >
    {Array.from(title).map((letter: any, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: Data) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[10px] font-bold md:text-[45px] text-[35px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
