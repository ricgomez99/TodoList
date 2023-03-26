"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import Inputs from "../Inputs";
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Form({ id }: any) {
  const visible = useSelector((state: any) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleChangeAction());
    if (visible) dispatch(updateAction(id));
  };

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="> Tasks" textStyles="text-center" />
        <TitleText
          title={<>Add tasks to your list</>}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "spring", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          className="relative mt-[15px] mx-auto"
        >
          <button
            onClick={handleClick}
            className="py-2 px-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded inline-flex items-center"
          >
            <img src="/addIcon.png" alt="add-icon" className="w-4 h-4 mr-2" />
            <span>New task</span>
          </button>
        </motion.div>
        {visible ? <Inputs /> : null}
      </motion.div>
    </section>
  );
}
