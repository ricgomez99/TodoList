import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import styles from "@/styles";
import Items from "@/components/Items";
import { use } from "react";
import { getItems } from "@/lib/helper";

export default async function Home() {
  interface Data {
    id: string;
    title: string;
    body: string;
    date?: string;
  }
  const items = await getItems();
  const id = items.map((item: Data) => item.id);

  return (
    <div className="bg-primary-gray overflow-hidden h-[120vh]">
      <NavBar />
      <div className="relative">
        <Form id={id} />
      </div>
      <div className="relative">
        <Items />
      </div>
    </div>
  );
}
