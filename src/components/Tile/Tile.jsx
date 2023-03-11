import React, { useState } from "react";
import "./Tile.css";

function Tile({ pictureTile, setImagePath }) {
  // const props =
  //   "https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  // setImagePath -> props.setImagePath
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = () => {
    setIsClicked(!isClicked);
    setImagePath(pictureTile);
  };

  return (
    <div className="Tile" onClick={onClickHandler}>
      {isClicked && <img src={pictureTile} className="Image" />}
    </div>
  );
}

export default Tile;
