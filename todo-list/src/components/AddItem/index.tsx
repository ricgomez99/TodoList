"use client";

import { useReducer } from "react";
import Success from "../Success";
import Error from "../Error";
import { useQueryClient, useMutation } from "react-query";
import { addItem, getItems } from "@/lib/helper";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddItem() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const queryClient = useQueryClient();
  //Post new data to the backend
  const addMutation = useMutation(addItem, {
    onSuccess: () => {
      queryClient.prefetchQuery("items", getItems);
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      return console.log("No Data Found");
    }
    let { title, body } = formData;

    //Data that will be passed to the backend
    const model = {
      title,
      body,
    };

    addMutation.mutate(model);
  };

  //Validates if the data is uploaded or if we get an error
  if (addMutation.isLoading) return <div>Loading...</div>;
  if (addMutation.isError)
    return <Error message="Error while uploading data" />;
  if (addMutation.isSuccess) return <Success message={"Item created!"} />;

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
        Create
      </button>
    </form>
  );
}
