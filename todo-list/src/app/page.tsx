"use client";

import NavBar from "@/components/NavBar";
import Form from "@/components/Form";
import styles from "@/styles";
import Items from "@/components/Items";

export default function Home() {
  return (
    <div className="bg-primary-gray overflow-hidden h-[100vh]">
      <NavBar />
      <div className="relative">
        <Form />
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
