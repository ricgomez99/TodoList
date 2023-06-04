export default function Loading() {
  return (
    <article className="mx-auto flex justify-center">
      <ul className="list-disc pl-6 mt-4 space-y-2 mx-auto">
        {[...(Array(4).keys() as any)].map((e, index) => (
          <li key={index} className="list-none gap-2">
            <span
              className="inline-block h-[80px] animate-pulse w-[500px] lg:max-w-[600px] rounded-md bg-[#D1D1D1]"
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
