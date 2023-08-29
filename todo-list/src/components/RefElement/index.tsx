"use client";

import { forwardRef, RefObject } from "react";
import { useEffect, useState } from "react";
import { ScrollTopButton } from "../ScrollTopButton";

interface ChildProps {
  children: React.ReactNode;
}

const RefElement = forwardRef<HTMLDivElement, ChildProps>(
  ({ children }, ref) => {
    //Potential custom hook (Find out how to pass the ref.current to child element)
    const [displayButton, setDisplayButton] = useState<Boolean>(false);
    const currentElement = ref as RefObject<HTMLDivElement>;
    const handleScrollTop = () => {
      currentElement.current?.children[0].scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      currentElement.current?.children[0].addEventListener(
        "scroll",
        (event) => {
          let currentTarget = event.target as HTMLElement;

          currentTarget.scrollTop > 100
            ? setDisplayButton(true)
            : setDisplayButton(false);
        }
      );
    }, []);

    return (
      <div ref={ref}>
        {children}
        {displayButton ? (
          <ScrollTopButton handleScrollToTop={handleScrollTop} />
        ) : null}
      </div>
    );
  }
);

export default RefElement;
