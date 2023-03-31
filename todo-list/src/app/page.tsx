import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import styles from "@/styles";
import Items from "@/components/Items";

export default async function Home() {
  return (
    <div className="bg-primary-gray overflow-hidden h-[120vh]">
      <NavBar />
      <div className="relative">
        <Form />
      </div>
      <div className="relative">
        <Items />
      </div>
    </div>
  );
}
