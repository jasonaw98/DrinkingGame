'use client'
import { useState } from 'react';

const CardComponent = ({dare}) => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => {
        setFlipped(!flipped);
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
        <div className="flex flex-col justify-center items-center bg-slate-900 w-[156px] border-l-4 border-b-4 border-t-4 border-r-4 border-slate-700 rounded-[1rem] min-h-[207px] p-4 drop-shadow-lg">
          <div className="text-center font-bold text-white text-[23px] mb-2">{dare}</div>
          <div className="border-b-2 border-white w-16"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardComponent