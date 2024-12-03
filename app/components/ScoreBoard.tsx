"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";
import { getDb } from "../actions";

export default function ScoreBoard() {
  const [visible, setVisible] = useState(false);
  const [scoreData, setScoreData] = useState<
    { id: number; userscore: number; botscore: number }[]
  >([]);
  const card = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (card.current && !card.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    getDb().then((data) => {
      setScoreData(data);
    });

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div>
      <button
        className="flex justify-center items-center pt-1 text custom-shadow rounded-lg bg-white hover:bg-gray-200 text-3xl h-16 w-16"
        onClick={() => setVisible(!visible)}
      >
        <FaTrophy />
      </button>
      {visible && (
        <div className=" z-20">
          <div className="top-0 left-0 w-full h-full fixed flex justify-center items-center bg-[#9e9b9bb3]">
            <div
              ref={card}
              className="bg-gray-200 z-50 w-[400px] h-[500px] text-2xl flex items-center flex-col rounded-md"
            >
              <h1 className="m-5 text-4xl">Scores</h1>

              <div className="h-[400px]  overflow-y-scroll">
                {scoreData.map(
                  (data: {
                    id: number;
                    userscore: number;
                    botscore: number;
                  }) => (
                    <div
                      key={data.id} // Use a unique property from your data object
                      className="h-20 flex flex-row items-center justify-around border-[1px] border-t-[#3b3b3b] w-[350px]"
                    >
                      <p>You: {data.userscore}</p>
                      <p>Bot: {data.botscore}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
