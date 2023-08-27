"use client";

import { forwardRef } from "react";

interface ButtonProps {
  reference: HTMLElement;
}

export function ScrollTopButton({ reference }: ButtonProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* {backToTop ? (
        <button
          className="bg-transparent text-[16px] text-grey-100 mx-auto px-[20px] py-[8px] border-b-gray-200"
          onClick={handleScrollToTop}
        >
          go to top
        </button>
      ) : (
        <></>
      )} */}
    </>
  );
}
