"use client";
import React, { useEffect, useState } from "react";

export default function Scores({ data }) {
  const [scoreYou, setScoreYou] = useState(0);
  const [scoreBot, setScoreBot] = useState(0);
  const [update, setUpdate] = useState(data);

  const addPoints = () => {
    console.log(data);

    if (data) {
      if (data.yourCard.id > data.botcard.id) {
        setScoreYou((prevScore) => prevScore + 1);
        console.log("you win");
      } else {
        setScoreBot((prevScore) => prevScore + 1);
        console.log("bot win");
      }
    }
  };
  useEffect(() => {
    addPoints();
  }, [update]);

  console.log(data.botCard);

  return (
    <div className="w-1/3 flex justify-center flex-row">
      <div className=" text custom-shadow mr-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
        You: {scoreYou} p
      </div>
      <div className="text custom-shadow ml-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
        Bot: {scoreBot} p
      </div>
    </div>
  );
}
