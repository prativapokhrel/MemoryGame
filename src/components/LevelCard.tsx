export default function LevelCard({ number, cards, pairs, onClick }) {
  return (
    <button
      className="border border-gray-400 bg-white rounded-md text-blue-500 font-bold p-2 shadow-lg 
      shadow-gray-300 flex gap-2 hover:bg-sky-700  group"
      onClick={onClick}
    >
      <div className="border text-xl bg-blue-500 text-white h-10 w-10 rounded-full text-center flex justify-center items-center">
        {number}
      </div>

      <div className="flex flex-col items-start ">
        <div className="group-hover:text-white">{cards} CARDS - FREE PLAY</div>
        <div className="text-black font-light text-xs group-hover:text-white">
          {pairs} PAIRS
        </div>
      </div>
    </button>
  );
}
