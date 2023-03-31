import "./App.css";
import TilesContainer from "./components/TilesContainer/TileContainer";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import { useEffect, useState } from "react";

export const TIME_TO_GAME_START = 3000;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [counterText, setCounterText] = useState("");

  function timeToChangeText(additionalTime, text) {
    setTimeout(() => {
      setCounterText(text);
    }, TIME_TO_GAME_START + additionalTime);
  }

  useEffect(() => {
    if (isGameStarted) {
      timeToChangeText(1000, "3");
      timeToChangeText(2000, "2");
      timeToChangeText(3000, "1");
      timeToChangeText(4000, "Start!");
    }
  }, [isGameStarted]);

  return (
    <div className="App">
      <TilesContainer
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />
      {isGameStarted ? (
        <div className="ContainerCountDown">
          <p className="TextCountDown">{counterText}</p>
        </div>
      ) : (
        <StartGameButton
          isGameStarted={isGameStarted}
          setIsGameStarted={setIsGameStarted}
        />
      )}
    </div>
  );
}

export default App;
