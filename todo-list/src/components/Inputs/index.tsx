"use client";
import AddItem from "../AddItem";
import UpdateItem from "../UpdateItem";

export default function Inputs() {
  const flag = true;

  return (
    <div className="container mt-[18px] mx-auto flex justify-center">
      {flag ? <AddItem /> : <UpdateItem />}
    </div>
  );
}
