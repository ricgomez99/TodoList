"use client";

import { forwardRef, RefObject } from "react";
import { useEffect } from "react";
import useScrollToTop from "@/utils/useScrollToTop";

interface ChildProps {
  children: React.ReactNode;
}

const RefElement = forwardRef<HTMLDivElement, ChildProps>(
  ({ children }, ref) => {
    const currentElement = ref as RefObject<HTMLDivElement>;
    let scrollAxis: number;

    useEffect(() => {
      currentElement.current?.children[0].addEventListener(
        "scroll",
        (event) => {
          let currentTarget = event.target as HTMLElement;

          scrollAxis = currentTarget.scrollTop;
        }
      );
    }, []);

    return <div ref={ref}>{children}</div>;
  }
);

export default RefElement;
