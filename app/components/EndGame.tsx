"use client";

import { saveDb } from "../actions";

export default function EndGame({ yourScore, botScore, resetScores, unFlip }) {
  // reset points
  // unflip cards
  return (
    <div>
      <button
        onClick={() => {
          saveDb(yourScore, botScore);
          resetScores();
          unFlip();
        }}
        className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-48"
      >
        End Game
      </button>
    </div>
  );
}
