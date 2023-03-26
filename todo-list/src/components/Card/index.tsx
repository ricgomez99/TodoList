"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "@/redux/reducer";
import { MdDelete, MdEditSquare } from "react-icons/md";

interface Props {
  title: string;
  body?: string;
}
export default function Card({ title, body }: Props) {
  // current state
  const stateVisible = useSelector((state: any) => state.app.client.toggleForm);

  const dispatch = useDispatch();
  //Action to change state value
  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(stateVisible);
  };
  return (
    <div className="lg:w-[600px] lg:h-[100px] w-[500px] h-[100px] rounded-md flex flex-row gap-2 justify-between mx-auto my-[15px] glassmorphism">
      <details className="flex flex-col justify-start">
        <summary className="my-[12px] mx-[0] p-[0.5em] font-bold text-[18px] leading-3 cursor-pointer text-[#41444B]">
          {title}
        </summary>
        <p className="text-[15px] text-[#aaa9b3] font-normal px-[24px]">
          {body}
        </p>
      </details>
      <div className="flex flex-col justify-evenly gap-[10px] align-middle my-[8px] mx-[10px]">
        <MdDelete
          color="#4b4d52"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <MdEditSquare
          color="#4b4d52"
          width={25}
          height={25}
          className="cursor-pointer"
          onClick={onUpdate}
        />
      </div>
    </div>
  );
}
