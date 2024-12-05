"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import blue from "../photos/blue.jpg";
import red from "../photos/red.jpg";
import { useFlipped } from "../context/FlippedContext";
import "../globals.css";

export default function CardFunction({ passData }) {
  const { flipped, setFlipped } = useFlipped();
  const [data, setData] = useState("");
  const [cardYou, setCardYou] = useState<Card | null>(null);
  const [cardBot, setCardBot] = useState<Card | null>(null);

  type Card = {
    id: number;
    text: string;
  };

  const cards = [
    {
      id: 1,
      text: "2 of Spades",
    },
    {
      id: 2,
      text: "3 of Spades",
    },
    {
      id: 3,
      text: "4 of Spades",
    },
    {
      id: 4,
      text: "5 of Spades",
    },
    {
      id: 5,
      text: "6 of Spades",
    },
    {
      id: 6,
      text: "7 of Spades",
    },
    {
      id: 7,
      text: "8 of Spades",
    },
    {
      id: 8,
      text: "9 of Spades",
    },
    {
      id: 9,
      text: "10 of Spades",
    },
    {
      id: 10,
      text: "Jack of Spades",
    },
    {
      id: 11,
      text: "Queen of Spades",
    },
    {
      id: 12,
      text: "King of Spades",
    },
    {
      id: 13,
      text: "Ace of Spades",
    },
  ];

  const drawCards = () => {
    const randomCardYou = Math.floor(Math.random() * cards.length);
    const randomCardBot = Math.floor(Math.random() * cards.length);

    const yourCard = cards[randomCardYou];
    const botCard = cards[randomCardBot];

    setCardYou(yourCard);
    setCardBot(botCard);
    setFlipped(true);

    const cardData = { yourCard, botCard };
    setData(cardData);
    passData(data);
  };

  useEffect(() => {
    passData(data);
  }, [data]);

  const draw = () => {
    if (flipped) {
      setFlipped(false);
      setTimeout(() => {
        drawCards();
        setFlipped(true);
      }, 600);
    } else {
      drawCards();
      setFlipped(true);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`card-container ${flipped ? "flipped" : ""}`}>
        <div className="card">
          <div className="card-front">
            <Image
              className="-z-10"
              alt="blue"
              src={blue}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          <div className="card-back bg-white text-3xl">
            <h3 className="pb-4 text-4xl font-bold">You</h3>
            <p>{cardYou ? cardYou.text : "error bad coder"}</p>
          </div>
        </div>
      </div>

      <button
        className="hover:bg-gray-200 m-14 custom-shadow text rounded-lg bg-white text-3xl h-16 w-48"
        onClick={draw}
      >
        Draw
      </button>

      <div className={`card-container ${flipped ? "flipped" : ""}`}>
        <div className="card">
          <div className="card-front">
            <Image
              className="-z-10"
              alt="red"
              src={red}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
          <div className="card-back bg-white text-3xl">
            <h3 className="pb-4 text-4xl font-bold">Bot</h3>
            <p>{cardBot ? cardBot.text : "error bad coder"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
