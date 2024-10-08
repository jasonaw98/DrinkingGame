"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Pepe = () => {
  const [eggs, setEggs] = useState(new Array(20).fill("normal")); // Initialize all eggs as normal
  const [gameOver, setGameOver] = useState(false);
  const [spoiledEggIndex, setSpoiledEggIndex] = useState(null);

  const initializeGame = () => {
    setEggs(new Array(20).fill("normal"));
    const index = Math.floor(Math.random() * 20);
    setSpoiledEggIndex(index);
    setGameOver(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleEggTap = (index) => {
    if (index === spoiledEggIndex) {
      setGameOver(true);
    } else {
      setEggs((eggs) =>
        eggs.map((egg, idx) => (idx === index ? "tapped" : egg))
      );
    }
  };

  return (
    <>
      <main className="flex flex-col items-center w-full h-full px-4">
        <Link
          href="/"
          className="flex justify-center text-[32px] pt-16 font-extrabold text-gray-200 mb-8"
        >
          <h1 className="drop-shadow-md">GANJINWEE</h1>
        </Link>
        <div className="grid grid-cols-4 col-span-7 w-full max-w-lg gap-6 justify-center items-center">
          {eggs.map((egg, index) => (
            <div
              key={index}
              onClick={() =>
                !gameOver && egg === "normal" && handleEggTap(index)
              }
              className={`flex items-center justify-center scale-[1.2] ${
                index === spoiledEggIndex && gameOver
                  ? "scale-[3.3] z-20"
                  : "scale-[1.2]"
              }`}
              style={{
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {egg === "normal" ? (
                <Image src="/image.png" width={72} height={90} alt="pepe" />
              ) : (
                <Image
                  src="/image.png"
                  width={72}
                  height={90}
                  alt="pepe"
                  className="opacity-0"
                />
              )}
            </div>
          ))}
        </div>
        {gameOver && (
          <div className="mt-16 z-50">
            <button
              onClick={initializeGame}
              type="button"
              className="text-white bg-gradient-to-r from-indigo-400 to-blue-400 hover:bg-gradient-to-bl font-semibold rounded-lg text-md px-4 py-2.5 text-center mr-2 mb-2 shadow-md"
            >
              Restart
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Pepe;
