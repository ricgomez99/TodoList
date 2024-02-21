import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import Items from "@/components/Items";

export default async function Home() {
  return (
    <div className="bg-primary-gray h-[100vh] overflow-y-scroll scrollbar-none">
      <NavBar />
      <div className="relative z-0">
        <Form />
      </div>
      <div className="relative flex">
        <Items />
      </div>
    </div>
  );
}
