"use client";
import { useState, useEffect } from "react";
import CardComponent from "@/components/CardComponent";
import Link from "next/link";

const Page = () => {
  const [cardsData, setCardsData] = useState([]);
  const [cardsDataSet, setCardsDataSet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getRandomElements(array, num) {
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, num);
  }

  // Function to populate cardsSet with random data
  function refreshCardsDataSet() {
    if (cardsData.length > 0) {
      const randomCards = getRandomElements(cardsData, 4);

      const newCardsSet = randomCards.map((card, index) => ({
        id: index + 1,
        category: card.category,
        dare: card.dare,
        author: card.author,
      }));

      setCardsDataSet(newCardsSet);
      console.log("New Set", newCardsSet);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwqLjXZKiay7qzp2CIFWDUbSHgudgZWY019cs1FQK08KFQj-zhpRyC27_0ItbayOU1Zyw/exec"
        );
        const fetchedData = await response.json();
        // console.log(fetchedData);
        setCardsData(fetchedData);
      } catch (error) {
        alert("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (cardsData.length > 0) {
      const randomCards = getRandomElements(cardsData, 4);

      const cardsSet = randomCards.map((card, index) => ({
        id: index + 1,
        category: card.category,
        dare: card.dare,
        author: card.author,
      }));
      setCardsDataSet(cardsSet);
    }
  }, [cardsData]);

  const handleCardFlippedBack = (flippedState) => {
    if (flippedState) {
      refreshCardsDataSet();
    }
  };

  return (
    <main className="">
      <Link href="/" className="flex justify-center text-[32px] pt-16 mb-[-6rem] font-extrabold text-gray-100">
        <h1 className="drop-shadow-md">🍻 Sippin ? Skippin 🍻</h1>
      </Link>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div
            aria-label="Orange and tan hamster running in a metal wheel"
            role="img"
            className="wheel-and-hamster"
          >
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center p-0">
          <div className="grid grid-cols-2 gap-7 place-content-center h-48 gap-y-10">
            {cardsDataSet.map((card) => (
              <CardComponent
                key={card.id}
                category={card.category}
                dare={card.dare}
                author={card.author}
                onCardFlippedBack={handleCardFlippedBack}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center text-[32px] pt-0 mt-[-6rem] font-extrabold text-gray-100">
        <Link href="https://forms.gle/JxUZw4R89HEe6CSd6">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-indigo-400 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-md"
          >
            Add Yours
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Page