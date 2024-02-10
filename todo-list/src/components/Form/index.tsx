"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import Inputs from "../Inputs";
import { toggleChangeAction } from "@/redux/reducer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/helper";

export default function Form() {
  const visible = useAppSelector((state) => state.app.client.toggleForm);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(toggleChangeAction());
  };

  const { data } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: () => getItems(),
  });

  const title =
    data && data?.length > 0
      ? `Current Notes: ${data?.length}`
      : "Not Notes Available";

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="> Tasks" textStyles="text-center" />
        <TitleText title={title} textStyles="text-center" />

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          className="relative mt-[15px] mx-auto">
          <button
            onClick={handleClick}
            className="py-2 px-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center">
            <img src="/addIcon.png" alt="add-icon" className="w-4 h-4 mr-2" />
            <span>New Note</span>
          </button>
        </motion.div>
        {visible ? <Inputs /> : null}
      </motion.div>
    </section>
  );
}
