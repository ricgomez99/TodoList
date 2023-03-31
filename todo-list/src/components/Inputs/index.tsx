"use client";
import AddItem from "../AddItem";
import UpdateItem from "../UpdateItem";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};
export default function Inputs() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const formId = useSelector((state: any) => state.app.client.formId);

  return (
    <div className="container mt-[18px] mx-auto flex justify-center">
      {formId
        ? UpdateItem({ formId, formData, setFormData })
        : AddItem({ formData, setFormData })}
    </div>
  );
}
