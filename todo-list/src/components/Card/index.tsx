"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";
import { MdDelete, MdEditSquare } from "react-icons/md";

interface Props {
  id: string | any;
  title: string;
  body: string;
  date?: string;
  index?: number | any;
}
export default function Card({ title, body, id, index }: Props) {
  // current state
  const stateVisible = useAppSelector((state) => state.app.client.toggleForm);
  const dispatch = useAppDispatch();

  //Action to change state value
  const onUpdate = () => {
    dispatch(toggleChangeAction(id));
    if (stateVisible) {
      dispatch(updateAction(id));
    }
  };

  //Delete action trigger
  const onDelete = () => {
    if (!stateVisible) {
      dispatch(deleteAction(id));
    }
  };

  return (
    <motion.div
      variants={fadeIn("down", "spring", index * 0.5, 1)}
      className="lg:w-[600px] min-h-[80px] max-w-[500px] w-[100%] rounded-md flex flex-row gap-2 justify-between mx-auto my-[15px] glassmorphism"
    >
      <details className="flex flex-col justify-start">
        <summary className="mt-[12px] mb-0 mx-[0] p-[0.5em] font-bold text-[18px] leading-3 cursor-pointer text-[#41444B]">
          {title}
        </summary>
        <p className="text-[15px] text-[#9BA4B5] font-normal px-[24px] pb-[10px]">
          {body}
        </p>
      </details>
      <div className="flex flex-col justify-evenly gap-[10px] max-h-[40px] self-center  align-middle my-[8px] mx-[10px]">
        <MdDelete
          width={25}
          height={25}
          className="cursor-pointer text-[#4b4d52] hover:text-[#95989f]"
          onClick={onDelete}
        />
        <MdEditSquare
          width={25}
          height={25}
          className="cursor-pointer text-[#4b4d52] hover:text-[#95989f]"
          onClick={onUpdate}
        />
      </div>
    </motion.div>
  );
}

// color="#4b4d52"
