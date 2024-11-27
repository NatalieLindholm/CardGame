import Image from "next/image";
import wood from "./photos/wood.jpg";
import felt from "./photos/felt.jpg";
import ScoreBoard from "../app/components/ScoreBoard";
import CardFunction from "./components/CardFunction";

export default function Home() {
  return (
    <div className="h-screen w-full font-[family-name:var(--font-inria-serif)]">
      <div className="custom-shadow w-full h-[120px] flex items-center justify-center absolute z-10 left-0 top-0;">
        <Image
          className="-z-10"
          alt="wood"
          src={wood}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <span className="w-1/3 flex justify-start ml-6">
          <ScoreBoard />
        </span>
        <span className="w-1/3 flex justify-center">
          <div className=" text custom-shadow mr-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
            You: p
          </div>
          <div className="text custom-shadow ml-5 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
            Bot: p
          </div>
        </span>
        <span className="w-1/3 flex justify-end mr-6">
          <button className="hover:bg-gray-200 text custom-shadow rounded-lg bg-white text-3xl h-16 w-48">
            End Game
          </button>
        </span>
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
          <CardFunction />
        </div>
      </div>
    </div>
  );
}
