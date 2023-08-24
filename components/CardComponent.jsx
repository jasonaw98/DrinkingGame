'use client'
import { useState } from 'react';

const CardComponent = ({category, dare, author, onCardFlippedBack}) => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);
        onCardFlippedBack(flipCard);
      };

  return (
    <>
   <div
      className={`card ${flipped ? 'flipped' : ''}`}
      onClick={flipCard}
    >
      <div className="card-front">
        <div className="flex flex-col justify-center items-center bg-slate-900 w-[156px] border-l-4 border-b-4 border-slate-700 rounded-[1rem] min-h-[207px] p-4 drop-shadow-lg">
          <div className="text-center font-bold text-white text-[20px] mb-2">Do or Drink</div>
          <div className="border-b-2 border-white w-16"></div>
        </div>
      </div>

      <div className="card-back">
        <div className="flex flex-col items-center bg-slate-900 w-[156px] border-l-4 border-b-4 border-t-4 border-r-4 border-slate-700 rounded-[1rem] min-h-[207px] p-4 drop-shadow-lg">
          <div className="text-center font-bold text-gray-100 text-[11px] mb-1">{category}</div>
          <div className="border-b-2 border-gray-300 rounded-md w-28"></div>
          <div className="text-center font-semibold text-white text-[9px] mt-3">{dare}</div>
        <div className='flex justify-end w-full mt-2'>
          <p className='text-white font-bold text-[7px]'>-{author ? author : 'Anonymous'}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardComponent