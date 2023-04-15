"use client";
import AddItem from "../AddItem";
import UpdateItem from "../UpdateItem";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/redux/store";
import { useReducer } from "react";

const formReducer = (state: RootState, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function Inputs() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useAppSelector((state) => state.app.client.formId);

  return (
    <div className="container mt-[18px] mx-auto flex justify-center">
      {formId
        ? UpdateItem({ formId, formData, setFormData })
        : AddItem({ formData, setFormData })}
    </div>
  );
}
