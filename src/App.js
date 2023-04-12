import "./App.css";
import TilesContainer from "./components/TilesContainer/TileContainer";
import StartGameButton from "./components/StartGameButton/StartGameButton";
import { useEffect, useState } from "react";
import StopWatch from "./components/StopWatch/StopWatch";

export const TIME_TO_GAME_START = 3000;

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [counterText, setCounterText] = useState("");
  const [areTilesShowing, setAreTilesShowing] = useState(false);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function timeToChangeText(additionalTime, text) {
    setTimeout(() => {
      setCounterText(text);
    }, TIME_TO_GAME_START + additionalTime);
  }

  useEffect(() => {
    if (isGameStarted) {
      setAreTilesShowing(true);
      timeToChangeText(1000, "3");
      timeToChangeText(2000, "2");
      timeToChangeText(3000, "1");
      timeToChangeText(4000, "Start!");
      setTimeout(() => {
        setAreTilesShowing(false);
        setIsRunning(true);
      }, 7000);
    }
  }, [isGameStarted]);

  return (
    <div className="App">
      <TilesContainer
        areTilesShowing={areTilesShowing}
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
        setIsRunning={setIsRunning}
      />
      <div>
        {!areTilesShowing ? (
          <StopWatch time={time} setTime={setTime} isRunning={isRunning} />
        ) : null}
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
    </div>
  );
}

export default App;
