"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaTrophy } from "react-icons/fa";

export default function ScoreBoard() {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card div

  // Close the scoreboard when clicking outside the card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div className="w-1/3 flex justify-start ml-6">
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
              ref={cardRef}
              className="bg-gray-200 z-50 w-[400px] h-[500px] text-2xl flex items-center flex-col rounded-md"
            >
              <h1 className="m-5 text-4xl">Scores</h1>

              <div className="h-[400px]  overflow-y-scroll">
                <div className="h-20 flex flex-row items-center justify-around border-[1px] border-t-[#3b3b3b] w-[350px]">
                  <p>You: 12</p>
                  <p>Bot: 3</p>
                </div>
                <div className="h-20 flex flex-row items-center justify-around border-[1px] border-t-[#3b3b3b] w-[350px]">
                  <p>You: 12</p>
                  <p>Bot: 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
