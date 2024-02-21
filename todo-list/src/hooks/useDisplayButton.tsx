import { useState, useEffect, RefObject } from "react";

export default function useDisplayButton(
  currentElement: RefObject<HTMLDivElement>
) {
  const [displayButton, setDisplayButton] = useState(false);

  useEffect(() => {
    const handleScroll = (event: Event) => {
      if (currentElement.current) {
        const scrollTop = currentElement.current.scrollTop;
        console.log("scroll Value: ", scrollTop.toString());
        setDisplayButton(true);
      }
    };

    currentElement.current?.addEventListener("scroll", handleScroll);

    return () => {
      currentElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, [currentElement]);

  console.log(displayButton);

  return { displayButton };
}
