import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-row h-screen ">
      <div className="bg-gray-500 flex justify-center items-center w-[70%]">
        <div className="rounded-full border border-gray-200 border-solid  h-40 w-40 p-3 flex items-center text-center justify-center bg-transparent">
          <Image
            src="/image/converse-clipart-shoe-jordan-2.png"
            alt="jemmohkicks image"
          />
        </div>
      </div>
      <div className="bg-white flex justify-center items-center  flex-col">
        <Image
          src="/image/JemmohKicks_Trimmed.png"
          className="w-full h-24 px-2"
          alt="jemmohkicks image"
        />
        {children}
      </div>
    </main>
  );
}
