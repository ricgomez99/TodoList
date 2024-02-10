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
import useDisplayButton from "@/hooks/useDisplayButton";
import { ScrollTopButton } from "../ScrollTopButton";

export default function Items() {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["hydrate-items"],
    queryFn: () => getItems(),
  });

  //deleteId state
  const deleteId = useAppSelector((state) => state.app.client.deletedItem);
  const myRef = useRef<HTMLDivElement>(null);

  // No adding the event properly, TODO
  const { displayButton } = useDisplayButton(myRef);

  const handleScrollTop = () => {
    if (myRef && myRef.current) {
      myRef.current?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  console.log("myRef Value: ", myRef);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error message={`Got error ${error instanceof Error ? error : null}`} />
    );
  if (deleteId) return <Confirmation deleteId={deleteId} />;

  return (
    <div
      ref={myRef}
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
      {displayButton && <ScrollTopButton handleScrollToTop={handleScrollTop} />}
    </div>
  );
}
