import "./App.css";
import TilesContainer from "./components/TilesContainer/TileContainer";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <div className="App">
      <TilesContainer
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />
      <StartGameButton
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />
    </div>
  );
}

export default App;
