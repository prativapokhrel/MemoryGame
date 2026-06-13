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
  1: "grid-rows-2",
  2: "grid-rows-3",
  3: "grid-rows-4",
};
function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const cards = selectedLevel ? levelToCards[selectedLevel] : 0;
  const gridRows = selectedLevel ? levelToGridRows[selectedLevel] : "";
  console.log("GridRows", gridRows);
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl font-bold mb-4">Memory Game</h1>
      {!selectedLevel && (
        <LevelOptions
          setSelectedLevel={setSelectedLevel}
          numberOfCards={Object.values(levelToCards)}
        />
      )}
      {selectedLevel && (
        <div className={`grid grid-flow-col ${gridRows} gap-1`}>
          <MemoryGame numberOfCards={cards} />
        </div>
      )}
    </div>
  );
}

export default App;
