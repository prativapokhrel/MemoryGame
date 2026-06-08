import "./App.css";
import MemoryGame from "./components/MemoryGame";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Memory Game</h1>
      <div className="w-60">
        <div className="grid grid-flow-col grid-rows-2 gap-1">
          <MemoryGame />
        </div>
      </div>
    </>
  );
}

export default App;
