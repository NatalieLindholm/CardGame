"use client";
import React, { useState } from "react";
import Image from "next/image";
import wood from "./photos/wood.jpg";
import felt from "./photos/felt.jpg";
import CardFunction from "./components/CardFunction";
import Scores from "./components/Scores";
import { CardType } from "./types";

export default function Home() {
  const [data, setData] = useState<CardType>();
  const handleData = (data: CardType) => {
    setData(data);
  };
  return (
    <div className="h-screen w-full font-[family-name:var(--font-inria-serif)]">
      <div className="custom-shadow w-full h-[120px] flex items-center absolute z-10 left-0 top-0;">
        <Image
          className="-z-10"
          alt="wood"
          src={wood}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {data && <Scores data={data} />}
      </div>

      <div className="flex w-full h-full">
        <div className="flex-1 pt-32 flex items-center justify-center flex-row">
          <Image
            className="-z-20"
            alt="felt"
            src={felt}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <CardFunction passData={handleData} />
        </div>
      </div>
    </div>
  );
}
