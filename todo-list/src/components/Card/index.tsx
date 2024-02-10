"use client";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "@/redux/reducer";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { CardProps } from "@/app/types";

export default function Card({ title, body, id, index }: CardProps) {
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
      variants={zoomIn(0.5, 0.8)}
      className="w-[100%] h-[100%] px-[15px] items-stretch rounded-md flex flex-row gap-2 justify-between mx-auto my-[15px] glassmorphism">
      <div className="flex flex-col justify-center gap-1">
        <h3 className="mt-[12px] mb-0 mx-[0] font-bold text-[18px] leading-3 cursor-pointer text-[#41444B]">
          {title}
        </h3>
        <p className="text-[15px] text-[#9BA4B5] font-normal pb-[10px]">
          {body}
        </p>
      </div>
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
