import React, { useState } from "react";
import "./Tile.css";

function Tile() {
  const tilePicture =
    "https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => setIsClicked(!isClicked);

  return (
    <div className="Tile" onClick={onClickHandler}>
      {/* {isClicked.toString()} */}
      {isClicked && <img src={tilePicture} className="Image" />}
    </div>
  );
}

export default Tile;
