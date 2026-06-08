import { useState } from "react";
import "./App.css";
import LevelOptions from "./components/LevelOptions";
import MemoryGame from "./components/MemoryGame";

const levelToCards = {
  1: 6,
  2: 12,
  3: 16,
};

const levelToGridRows = {
  1: 2,
  2: 3,
  3: 4,
};
function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const cards = selectedLevel ? levelToCards[selectedLevel] : 0;
  const gridRows = selectedLevel ? levelToGridRows[selectedLevel] : 0;
  return (
    <>
      <h1 className="text-3xl font-bold underline">Memory Game</h1>
      <div className="w-60">
        {!selectedLevel && <LevelOptions setSelectedLevel={setSelectedLevel} />}
        {selectedLevel && (
          <div className={`grid grid-flow-col grid-rows-${gridRows} gap-1`}>
            <MemoryGame numberOfCards={cards} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
