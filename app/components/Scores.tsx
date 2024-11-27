"use client";

import React from "react";

// how to see whoever had the higher card thru id, aka whoever had higher id wins
// if () {
//   // check who has the higher card
// } else {
//   // dont do anything
// }

export default function Scores() {
  return (
    <div>
      <span className="w-1/3 flex justify-center">
        <div className=" text custom-shadow mr-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
          You: p
        </div>
        <div className="text custom-shadow ml-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
          Bot: p
        </div>
      </span>
    </div>
  );
}
