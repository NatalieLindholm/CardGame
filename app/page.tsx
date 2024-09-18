import { FaTrophy } from "react-icons/fa";

export default function Home() {
  return (
    <div className="h-screen w-full font-[family-name:var(--font-inria-serif)]">
      <header className="bg-orange-900 flex justify-between items-center w-full h-1/5 bg-[url('/photos/wood.jpg')]">
        <div className="flex justify-center items-center bg-white text-3xl w-44 rounded-xl">
          <div className="p-3">
            <p>Wins: 12</p>
            <p>Loses: 50</p>
          </div>
        </div>
        <button className="bg-white h-3/5 w-40 text-3xl rounded-xl">
          RESTART
        </button>

        <div className="h-full">
          <button className="bg-white h-3/5 w-48 text-3xl rounded-xl">
            END GAME
          </button>
          <button className="bg-white h-3/5 rounded-xl">
            <FaTrophy />
          </button>
        </div>
      </header>
    </div>
  );
}
