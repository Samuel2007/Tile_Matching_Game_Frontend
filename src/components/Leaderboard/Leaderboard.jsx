import React from "react";
import "./Leaderboard.css";

function Leaderboard({ leaderboardData }) {
  const sortedLeaderboardData = leaderboardData.sort(function (a, b) {
    return a.time.localeCompare(b.time);
  });

  return (
    <div className="Leaderboard">
      {sortedLeaderboardData.map((element, index) => (
        <div className="LeaderboardRow">
          <div className="LeaderboardPlace">{index + 1}</div>
          <div className="LeaderboardCell">
            {element.name.length > 16
              ? element.name.slice(0, 16) + "..."
              : element.name}
          </div>
          <div className="LeaderboardCell">{element.time}</div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
