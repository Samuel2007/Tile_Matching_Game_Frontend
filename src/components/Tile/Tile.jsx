import React, { useState } from "react";
import "./Tile.css";

function Tile() {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => setIsClicked(!isClicked);

  return (
    <div className="Tile" onClick={onClickHandler}>
      {isClicked.toString()}
    </div>
  );
}

export default Tile;
