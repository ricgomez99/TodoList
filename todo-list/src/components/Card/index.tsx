"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction } from "@/redux/reducer";

interface Props {
  title: string;
}
export default function Card({ title }: Props) {
  const stateVisible = useSelector((state: any) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(toggleChangeAction());
    console.log(stateVisible);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onUpdate} className="inline-block">
        update
      </button>
    </div>
  );
}
