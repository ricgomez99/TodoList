"use client";
import AddItem from "../AddItem";
import UpdateItem from "../UpdateItem";
import { useAppSelector } from "@/lib/hooks";
import { useReducer } from "react";

const initState = {
  title: "",
  body: "",
};

export type ActionType = {
  type: "textInput";
  payload: {
    key: string;
    value: string;
  };
};

const formReducer = (
  state: typeof initState,
  action: ActionType
): typeof initState => {
  switch (action.type) {
    case "textInput":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export default function Inputs() {
  const [formData, setFormData] = useReducer(formReducer, initState);

  const formId = useAppSelector((state) => state.app.client.formId);

  return (
    <section className="container mt-[18px] mx-auto flex justify-center">
      {formId
        ? UpdateItem({ formId, formData, setFormData })
        : AddItem({ formData, setFormData })}
    </section>
  );
}
