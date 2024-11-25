"use client";

export default function NextRound() {
  // When the "next round" button is pressed:
  // - Reset cards
  // - Check who had the highest card
  // - Add point to whoever had the highest card

  return (
    <div>
      <button className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-52">
        Next Round
      </button>
    </div>
  );
}
