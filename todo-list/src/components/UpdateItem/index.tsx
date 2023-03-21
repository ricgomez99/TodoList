"use client";

import { useReducer } from "react";

import Success from "../Success";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function UpdateItem() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      console.log("No Data Found");
    }
    console.log(formData);
  };

  if (Object.keys(formData).length > 0)
    return <Success message="Task Updated!" />;

  return (
    <form className="grid grid-cols-1 w-[400px] gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="title"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Title"
          onChange={setFormData}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="body"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Note"
          onChange={setFormData}
        />
      </div>
      <button className="py-2 px-4 w-2/2 bg-[#425a78] font-bold hover:bg-[#2e4765] flex justify-center border rounded-md text-gray-100">
        Update
      </button>
    </form>
  );
}
