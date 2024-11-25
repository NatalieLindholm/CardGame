"use client";
import React, { useState } from "react";

export default function DrawCard() {
  // When a draw is clicked:
  // - Display a card between 1 and A (random select from an array??)

  const cards = [
    "Ace of Spades",
    "2 of Spades",
    "3 of Spades",
    "4 of Spades",
    "5 of Spades",
    "6 of Spades",
    "7 of Spades",
    "8 of Spades",
    "9 of Spades",
    "10 of Spades",
    "Jack of Spades",
    "Queen of Spades",
    "King of Spades",
  ];

  const [drawCard, setDrawCard] = useState("");

  const draw = () => {
    const random = Math.floor(Math.random() * cards.length);
    const randomCard = cards[random];
    setDrawCard(randomCard);
    console.log(randomCard);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" custom-shadow w-80 rounded-lg flex flex-col items-center justify-center bg-white text-3xl h-40">
        <h3 className="text pb-2 text-4xl font-bold">You</h3>
        {drawCard && <p>{drawCard}</p>}
      </div>

      <button
        className="hover:bg-gray-200 text bottom-12 absolute custom-shadow rounded-lg bg-white text-3xl h-16 w-48"
        onClick={draw}
      >
        Draw
      </button>
    </div>
  );
}
