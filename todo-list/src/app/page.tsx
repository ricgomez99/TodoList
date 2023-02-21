import { getItem } from "@/lib/helper";

export default async function Home() {
  const items = await getItem();

  return (
    <main>
      <h1>Hello World!!</h1>
      <div>
        {items?.map((item: any) => (
          <h3 key={item.id}>{item.title}</h3>
        ))}
      </div>
    </main>
  );
}
