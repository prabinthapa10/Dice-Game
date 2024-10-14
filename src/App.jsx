import React, { useState } from "react";
import Start from "./components/Start/Start";
import GamePlay from "./components/GamePlay/GamePlay";

export default function App() {
  const [toggle, setToggle] = useState(true);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <div>
      <div>
        {toggle ? (
          <GamePlay
            score={score}
            setScore={setScore}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        ) : (
          <Start setToggle={setToggle} />
        )}
      </div>
    </div>
  );
}
