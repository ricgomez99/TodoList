"use client";

import { displayMessage } from "@/lib/alert";
import Error from "../Error";
import LoadingText from "../LoadingText";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addItem, getItems } from "@/lib/helper";
import { ActionType } from "../Inputs";
import { useAppDispatch } from "@/lib/hooks";
import { toggleChangeAction } from "@/redux/reducer";
import { FormState } from "@/app/types";

export default function AddItem({
  formData,
  setFormData,
}: FormState<ActionType>) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  //Post new data to the backend
  const addMutation = useMutation(addItem, {
    onSuccess: async () => {
      await queryClient.prefetchQuery(["hydrate-items"], getItems);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) {
      return console.log("No Data Found");
    }
    const { title, body } = formData;

    //Data that will be passed to the backend
    const model = {
      title,
      body,
    };

    addMutation.mutate(model);
    dispatch(toggleChangeAction());
  };

  //Input change handler
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      type: "textInput",
      payload: {
        key: event.target.name,
        value: event.target.value,
      },
    });
  };

  //Display success alert
  const handleClick = () => {
    displayMessage("Task created Successfully");
  };

  //Validates if the data is uploaded or if we get an error
  if (addMutation.isLoading) return <LoadingText />;
  if (addMutation.isError)
    return <Error message="Error while uploading data" />;

  return (
    <form className="grid grid-cols-1 w-[400px] gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="title"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="input-type">
        <textarea
          name="body"
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          placeholder="Note"
          rows={5}
          cols={20}
          maxLength={200}
          onChange={handleChange}></textarea>
      </div>
      <button
        onClick={handleClick}
        className="py-2 px-4 w-2/2 bg-[#425a78] font-bold hover:bg-[#2e4765] flex justify-center border rounded-md text-gray-100">
        Create
      </button>
    </form>
  );
}
