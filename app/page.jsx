'use client'
import { useState } from 'react';

import CardComponent from '@/components/CardComponent'

export default function Home() {
  const cardsData = [
    { id: 1, text: 'Drink 1 sips' },
    { id: 2, text: 'Drink 2 sips' },
    { id: 3, text: 'Drink 3 sips' },
    { id: 4, text: 'Drink 4 sips' },
  ];

  return (
    <main className="">
      <div className='flex justify-center text-[32px] pt-16 mb-[-6rem] font-extrabold text-gray-100'>
      <h1 className='drop-shadow-md'>🍻 Drinking Game 🥂</h1>
      </div>
      <div className='flex min-h-screen flex-col items-center justify-center p-0'>
      <div className='grid grid-cols-2 gap-7 place-content-center h-48 gap-y-10'>
      {cardsData.map((card) => (
        <CardComponent
        key={card.id}
        dare={card.text}
        />
        ))}
      </div>
        </div>
    </main>
  )
}
