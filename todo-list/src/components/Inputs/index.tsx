"use client";
import AddItem from "../AddItem";
import UpdateItem from "../UpdateItem";
import { useSelector } from "react-redux";

export default function Inputs() {
  const formId = useSelector((state: any) => state.app.client.formId);

  return (
    <div className="container mt-[18px] mx-auto flex justify-center">
      {formId ? <UpdateItem /> : <AddItem />}
    </div>
  );
}
