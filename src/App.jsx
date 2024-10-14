import React, { useState } from "react";
import Start from "./components/Start/Start";
import GamePlay from "./components/GamePlay/GamePlay";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  return (
    <div>
      <div>
        {toggle ? (
          <GamePlay
            score={score}
            setScore={setScore}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            currentDice={currentDice}
            setCurrentDice={setCurrentDice}
            error={error}
            setError={setError}
          />
        ) : (
          <Start setToggle={setToggle} />
        )}
      </div>
    </div>
  );
}
