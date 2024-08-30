import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-screen py-12 gap-6">
      <div className="flex justify-center text-[32px] font-extrabold text-gray-100">
        <h1 className="drop-shadow-md">🍻 Drinking Games 🍻</h1>
      </div>
      <div className="h-full flex items-center">
      <div className="grid grid-cols-2 gap-6 items-center">
        <Link
          href="/justin"
          className="flex flex-col items-center rounded-2xl bg-[#262739] p-3"
        >
          <Image
            className="rounded-xl"
            src={"/image.png"}
            width={140}
            height={100}
            alt="Picture of the author"
          />
          <span className="w-full flex justify-center rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Tap Game</p>
          </span>
        </Link>
        <Link
          href="/pepe"
          className="flex flex-col items-center rounded-2xl bg-[#262739] p-3"
        >
          <Image
            className="rounded-xl"
            src={"/pepe.webp"}
            width={200}
            height={100}
            alt="Picture of the author"
          />
          <span className="w-full flex justify-center rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Tap Game</p>
          </span>
        </Link>
        <Link
          href="/tap"
          className="flex flex-col items-center rounded-2xl bg-[#262739] p-3"
        >
          <Image
            className="rounded-xl"
            src={"/sticker3.gif"}
            width={200}
            height={100}
            alt="Picture of the author"
          />
          <span className="w-full flex justify-center rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Tap Game</p>
          </span>
        </Link>
        <Link
          href="/card"
          className="flex flex-col items-center rounded-2xl bg-[#262739] p-3 "
        >
          <Image
            className="rounded-xl"
            src={"/card.jpeg"}
            width={200}
            height={100}
            alt="Picture of the author"
          />
          <span className="w-full flex justify-center pt-2 rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Card Game</p>
          </span>
        </Link>
      </div>
      </div>
    </main>
  );
}
