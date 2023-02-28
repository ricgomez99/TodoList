"use client";

interface Message {
  message: string;
}

export default function Success({ message }: Message) {
  return (
    <div className="success container mx-auto">
      <div className="flex justify-center mx-auto bg-[#B6E2A1] w-2/4 text-gray-100 text-md my-4 py-2 text-center bg-opacity-2 rounded-md font-semibold">
        {message}
      </div>
    </div>
  );
}
