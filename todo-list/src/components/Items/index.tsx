import { getItems } from "@/lib/helper";
import { use } from "react";
import Card from "../Card";

export default function Items() {
  const items = use(getItems());

  interface Data {
    id: string;
    title: string;
    body: string;
    data: string;
  }

  return (
    <div>
      {items?.map((item: Data) => (
        <Card title={item.title} key={item.id} />
      ))}
    </div>
  );
}
