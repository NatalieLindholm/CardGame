import React, { useState, useEffect } from "react";
import EndGame from "./EndGame";
import ScoreBoard from "./ScoreBoard";

export default function Scores({ data }) {
  const [scoreUser, setScoreUser] = useState(0);
  const [scoreBot, setScoreBot] = useState(0);

  const addPoints = () => {
    if (data) {
      if (data.yourCard.id > data.botCard.id) {
        setScoreUser((prevScore) => prevScore + 1);
      } else if (data.botCard.id > data.yourCard.id) {
        setScoreBot((prevScore) => prevScore + 1);
      } else {
        console.log("draw");
      }
    }
  };

  useEffect(() => {
    addPoints();
  }, [data]);

  return (
    <div className="w-full flex items-center">
      <div className="w-1/3 flex justify-start ml-6">
        <ScoreBoard />
      </div>

      <div className="w-1/3 flex justify-center">
        <div className="text custom-shadow mr-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
          You: {scoreUser} p
        </div>
        <div className="text custom-shadow ml-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
          Bot: {scoreBot} p
        </div>
      </div>

      <div className="w-1/3 flex justify-end mr-6">
        <EndGame
          yourScore={scoreUser}
          botScore={scoreBot}
          resetScores={() => {
            setScoreUser(0);
            setScoreBot(0);
          }}
        />
      </div>
    </div>
  );
}
