import { getItems } from "@/lib/helper";
import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import styles from "@/styles";

export default async function Home() {
  const items = await getItems();

  return (
    <div className="bg-primary-gray overflow-hidden h-[100vh]">
      <NavBar />
      <div className="relative">
        <Form />
      </div>
      <div>
        {items?.map((item: any) => (
          <h3 key={item.id}>{item.title}</h3>
        ))}
      </div>
    </div>
  );
}
