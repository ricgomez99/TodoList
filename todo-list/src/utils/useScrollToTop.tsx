"use client";

import { useState, useEffect } from "react";

// interface RefProps {
//   reference: RefObject<HTMLDivElement>;
// }

export default function useScrollToTop(reference: HTMLElement): Boolean {
  const [existReference, setExistReference] = useState(false);

  useEffect(() => {
    reference?.addEventListener("scroll", (event) => {
      let target = event.target as HTMLElement;

      console.log(target.scrollTop);
    });
    console.log(reference);
    // scrollAxis > 10 ? setExistReference(true) : setExistReference(false);
  }, []);

  return existReference;
}
