import { FaTrophy } from "react-icons/fa";
import Image from "next/image";
import wood from "../photos/wood.jpg";
import felt from "../photos/felt.jpg";

export default function Home() {
  return (
    <div className="h-screen w-full font-[family-name:var(--font-inria-serif)]">
      <div className="custom-shadow w-full h-[120px] flex items-center justify-center absolute z-10 left-0 top-0;">
        <Image
          className="-z-0"
          alt="wood"
          src={wood}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <span className="z-10 w-1/3 flex justify-start ml-6">
          <button className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-16 flex justify-center items-center">
            <FaTrophy />
          </button>
        </span>
        <span className="z-10 w-1/3 flex justify-center">
          <button className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-52">
            NEXT ROUND
          </button>
        </span>
        <span className="z-10 w-1/3 flex justify-end mr-6">
          <button className="text custom-shadow rounded-lg bg-white text-3xl h-16 w-48">
            END GAME
          </button>
        </span>
      </div>

      <div className="flex w-full h-full">
        <div className="right-border-5 flex-1 pt-32 relative flex items-center justify-center flex-col">
          <Image
            className="-z-0"
            alt="felt"
            src={felt}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="z-10 text custom-shadow mt-5 mr-5 top-32 absolute right-0 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
            Points: 19
          </div>
          <div className="z-10 custom-shadow w-80 rounded-lg flex flex-col items-center justify-center bg-white text-3xl h-40">
            <h3 className="text pb-2 text-4xl font-bold">You</h3>
            <p>8 of Spades</p>
          </div>
          <button className="text bottom-12 absolute custom-shadow rounded-lg bg-white text-3xl h-16 w-48">
            Draw
          </button>
        </div>
        <div className="left-border-5 flex-1 pt-32 relative flex items-center justify-center flex-col">
          <Image
            className="-z-0"
            alt="felt"
            src={felt}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="z-10 text custom-shadow mt-5 ml-5 top-32 absolute left-0 rounded-lg flex justify-center items-center bg-white text-3xl h-16 w-40">
            Points: 9
          </div>
          <div className="z-10 text custom-shadow w-80 rounded-lg flex flex-col items-center justify-center bg-white text-3xl h-40">
            <h3 className="pb-2 text-4xl font-bold">Bot</h3>
            <p>Queen of Spades</p>
          </div>
        </div>
      </div>
    </div>
  );
}
