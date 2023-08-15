"use client";

import { useState, useEffect } from "react";

export default function useBackToTop(): Boolean {
  const [backToTop, setBackToTop] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.screenY > 100 ? setBackToTop(true) : setBackToTop(false);
    });
  }, []);

  return backToTop;
}
