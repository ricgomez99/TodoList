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

export default function Items() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: () => getItems(),
  });

  //deleteId state
  const deleteId = useAppSelector((state) => state.app.client.deletedItem);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={`Got error ${error}`} />;
  if (deleteId) return <Confirmation deleteId={deleteId} />;

  return (
    <section>
      {data &&
        data.map((item, index: number) => (
          <motion.div
            variants={staggerContainer as any}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mx-auto yPaddings lg:w-[650px] w-[600px]  h-auto flex flex-col gap-[14px]"
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
  );
}
