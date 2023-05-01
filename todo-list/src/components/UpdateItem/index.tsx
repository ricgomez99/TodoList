"use client";

import Success from "../Success";
import { getItem, getItems, updateItem } from "@/lib/helper";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ActionType } from "../Inputs";

type form = {
  title: string;
  body: string;
};
interface Props {
  formId: string;
  formData: form;
  setFormData: React.Dispatch<ActionType>;
}

export default function UpdateItem({ formId, formData, setFormData }: Props) {
  /* Default Value Feature not working pending fix */
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items", formId],
    queryFn: () => getItem(formId),
  });

  const queryClient = useQueryClient();

  const updateMutation = useMutation(
    (newData: form) => updateItem(formId, newData),
    {
      onSuccess: async (data) => {
        queryClient.prefetchQuery(["hydrate-items"], getItems);
      },
    }
  );

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let updated = Object.assign({}, data, formData);
    await updateMutation.mutate(updated);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      type: "textInput",
      payload: { key: event.target.name, value: event.target.value },
    });
  };

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
        <input
          type="text"
          name="body"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Note"
          onChange={handleChange}
        />
      </div>
      <button className="py-2 px-4 w-2/2 bg-[#425a78] font-bold hover:bg-[#2e4765] flex justify-center border rounded-md text-gray-100">
        Update
      </button>
    </form>
  );
}
