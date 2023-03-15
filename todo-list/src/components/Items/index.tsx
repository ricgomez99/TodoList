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
      <div>
        {data &&
          data.map((item: Data) => <Card title={item.title} key={item.id} />)}
      </div>
    </>
  );
}
