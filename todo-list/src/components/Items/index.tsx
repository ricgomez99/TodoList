"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useQuery } from "react-query";
import { getItems } from "@/lib/helper";
import Error from "../Error";
import Card from "../Card";

interface Data {
  _id: string;
  title: string;
  body: string;
  date?: string;
}

export default function Items() {
  const { data, error, isError, isLoading } = useQuery("items", getItems);

  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <Error message={`Got error ${error}`} />;
  return (
    <>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto yPaddings lg:w-[650px] w-[600px]  h-auto flex flex-col gap-[14px]"
      >
        {data &&
          data.map((item: Data, index: number) => (
            <Card
              title={item.title}
              body={item.body}
              id={item._id}
              key={item._id}
              index={index}
            />
          ))}
      </motion.div>
    </>
  );
}
