"use client";
import { useFlipped } from "../context/FlippedContext";
import { saveDb } from "../actions";

export default function EndGame({
  yourScore,
  botScore,
  resetScores,
}: {
  yourScore: number;
  botScore: number;
  resetScores: () => void;
}) {
  const { setFlipped } = useFlipped();

  const unFlip = () => {
    setFlipped(false);
  };

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
