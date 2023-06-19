export default function Loading() {
  return (
    <article className="mx-auto flex justify-center items-center max-w-[1366px]">
      <ul className="list-disc mt-4 space-y-2 mx-auto justify-center items-center">
        {[...(Array(4).keys() as any)].map((e, index) => (
          <li key={index} className="list-none gap-2">
            <span
              className="inline-block h-[80px] animate-pulse lg:w-[500px] md:w-[450px] w-[400px] mx-auto rounded-md bg-[#D1D1D1]"
              style={{
                animationDelay: `${(e as any) * 0.5}s`,
                animationDuration: "1s",
              }}
            ></span>
          </li>
        ))}
      </ul>
    </article>
  );
}
