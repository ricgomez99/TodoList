"use client";

import { useQuery } from "react-query";
import { getItems } from "@/lib/helper";
import Error from "../Error";
import Card from "../Card";

interface Data {
  id: string;
  title: string;
  body: string;
  data: string;
}

export default function Items() {
  const { data, error, isError, isLoading } = useQuery("items", getItems);
  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <Error message={`Got error ${error}`} />;
  return (
    <>
      <div className="mx-auto yPaddings lg:w-[650px] w-[600px]  h-auto flex flex-col gap-[14px]">
        {data &&
          data.map((item: Data) => (
            <Card title={item.title} body={item.body} key={item.id} />
          ))}
      </div>
    </>
  );
}
