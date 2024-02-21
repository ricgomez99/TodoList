"use client";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/lib/helper";
import Error from "../Error";
import Card from "../Card";
import Loading from "./loading";
import { useAppSelector } from "@/lib/hooks";
import Confirmation from "../Modals/Confirmation";

export default function Items() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: () => getItems(),
  });

  //deleteId state
  const deleteId = useAppSelector((state) => state.app.client.deletedItem);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error message={`Got error ${error instanceof Error ? error : null}`} />
    );

  return (
    <div
      id="ref-element"
      className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 auto-cols-auto auto-rows-auto gap-x-[20px] gap-y-[20px] max-w-[1200px] mx-auto justify-center align-middle">
      {data &&
        data.map((item, index: number) => (
          <motion.div
            key={item._id}
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="yPaddings max-w-[400px] w-[100%] sm:w-[100%] h-[100%] grid place-items-center">
            <Card
              title={item.title}
              body={item.body}
              id={item._id}
              key={item._id}
              index={index}
            />
          </motion.div>
        ))}
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {deleteId && <Confirmation deleteId={deleteId} />}
      </AnimatePresence>
    </div>
  );
}
