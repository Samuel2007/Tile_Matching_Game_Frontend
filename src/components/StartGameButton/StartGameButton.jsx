import React, { useState } from "react";
import "./StartGameButton.css";

function StartGameButton({ isGameStarted, setIsGameStarted }) {
  if (isGameStarted) {
    return null;
  }
  const onClickHandler = () => {
    setIsGameStarted(true);
  };

  return (
    <div className="StartButton" onClick={onClickHandler}>
      <p className="StartButtonText">Start Game</p>
    </div>
  );
}

export default StartGameButton;
