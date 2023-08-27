"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/helper";
import Error from "../Error";
import Card from "../Card";
import Loading from "./loading";
import { useAppSelector } from "@/lib/hooks";
import Confirmation from "@/Modal/confirmation";
import { useRef } from "react";
import RefElement from "../RefElement";

export default function Items() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: () => getItems(),
  });

  //deleteId state
  const deleteId = useAppSelector((state) => state.app.client.deletedItem);
  const myRef = useRef<HTMLDivElement | null>(null);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error message={`Got error ${error instanceof Error ? error : null}`} />
    );
  if (deleteId) return <Confirmation deleteId={deleteId} />;

  return (
    <RefElement ref={myRef}>
      <section
        id="ref-element"
        className="overflow-y-scroll !scroll-smooth max-h-[330px] max-w-[550px] mx-auto scrollbar-none hover:scrollbar scrollbar-w-1 scrollbar-track-[#D8D8D8] scrollbar-thumb-rounded-lg scrollbar-thumb-gray-400 pb-[20px]"
      >
        {data &&
          data.map((item, index: number) => (
            <motion.div
              key={index}
              variants={staggerContainer as any}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="mx-auto yPaddings lg:max-w-[650px] w-[100%] px-[20px]  h-auto flex flex-col gap-[14px]"
            >
              <Card
                title={item.title}
                body={item.body}
                id={item._id}
                key={item._id}
                index={index}
              />
            </motion.div>
          ))}
      </section>
    </RefElement>
  );
}
