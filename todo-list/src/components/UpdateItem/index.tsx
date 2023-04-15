"use client";

import Success from "../Success";
import { getItem } from "@/lib/helper";
import { useQuery } from "react-query";

export default function UpdateItem({ formId, formData, setFormData }: any) {
  /* Feature not working pending fix */
  const { data, error, isError, isLoading } = useQuery(["items", formId], () =>
    getItem(formId)
  );

  const { title, body } = data;

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let updated = Object.assign({}, data);
  };

  return (
    <form className="grid grid-cols-1 w-[400px] gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="title"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Title"
          onChange={setFormData}
          // defaultValue={title}
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="body"
          className="border w-full px-5 py-3 focus:outline-none rounded-md "
          placeholder="Note"
          onChange={setFormData}
          // defaultValue={body}
        />
      </div>
      <button className="py-2 px-4 w-2/2 bg-[#425a78] font-bold hover:bg-[#2e4765] flex justify-center border rounded-md text-gray-100">
        Update
      </button>
    </form>
  );
}
