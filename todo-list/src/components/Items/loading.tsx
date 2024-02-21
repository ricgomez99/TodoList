export default function Loading() {
  return (
    <article className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 auto-cols-auto auto-rows-auto gap-x-[20px] gap-y-[20px] max-w-[1200px] mx-auto justify-center align-middle">
      {[...(Array(6).keys() as any)].map((e, index) => (
        <ul key={index} className="space-y-2 mx-auto grid place-items-center">
          <li className="list-none">
            <span
              className="flex h-[90px] animate-pulse lg:w-[350px] sm:w-[200px] mx-auto rounded-md bg-[#D1D1D1]"
              style={{
                animationDelay: `${(e as any) * 0.5}s`,
                animationDuration: "1s",
              }}></span>
          </li>
        </ul>
      ))}
    </article>
  );
}
