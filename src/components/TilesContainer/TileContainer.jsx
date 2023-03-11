import React, { useState } from "react";
import Tile from "../Tile/Tile";
import "./TileContainer.css";

function TilesContainer(props) {
  const listOfAllTiles = [
    "https://images.pexels.com/photos/1374884/pexels-photo-1374884.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4420454/pexels-photo-4420454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const [clickedImagePath, setImagePath] = useState(null);
  const listOfAllPairedTiles = [...listOfAllTiles, ...listOfAllTiles];
  const listToDisplay = listOfAllPairedTiles.sort(
    (a, b) => 0.5 - Math.random()
  );
  console.log(listToDisplay);

  return (
    <div className="TileContainer">
      {listToDisplay.map((element) => (
        <Tile pictureTile={element} setImagePath={setImagePath} />
      ))}
    </div>
  );
}

export default TilesContainer;
