"use client";

export default function EndGame() {
  // When "End Game" button is pressed:
  // - Reset table (scores and cards)
  // - Add the scores to the scoreboard and save in db

  return (
    <div>
      <button className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-48">
        End Game
      </button>
    </div>
  );
}
