"use client";
import CardGame from "@/components/CardGame";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center w-full h-full">
       <div className="flex justify-center text-[32px] pt-16 font-extrabold text-gray-100">
          <h1 className="drop-shadow-md">🍻 Drinking Games 🍻</h1>
        </div>
        <Link href="/tap" className="flex flex-col items-center rounded-2xl bg-blue-800 p-3 mt-6">
          <Image 
          className="rounded-xl"
          src={"/sticker3.gif"}
          width={200}
          height={100}
          alt="Picture of the author"/>
          <span className="w-full bg-blue-800 flex justify-center rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Tap Game</p>
          </span>
        </Link>
        <Link href="/card" className="flex flex-col items-center rounded-2xl bg-blue-800 p-3 mt-7">
          <Image 
          className="rounded-xl"
          src={"/card.jpeg"}
          width={200}
          height={100}
          alt="Picture of the author"/>
          <span className="w-full bg-blue-800 flex justify-center pt-2 rounded-b-xl">
            <p className="text-xl font-bold text-gray-100">Card Game</p>
          </span>
        </Link>
    </main>
  );
}
