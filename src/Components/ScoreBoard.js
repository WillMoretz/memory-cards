import React from "react";

function ScoreBoard(props) {
  const { currentScore, highScore } = props;
  return (
    <div className="scoreboard">
      <div>Current Score: {currentScore}</div>
      <div>High Score: {highScore}</div>
    </div>
  );
}

export default ScoreBoard;
