import React from "react";
import styles from "./GamePlay.module.css";

import TotalScore from "../TotalScore/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import RollDice from "../RollDice/RollDice";

export default function GamePlay({
  setScore,
  score,
  selectedNumber,
  setSelectedNumber,
  currentDice,
  setCurrentDice,
  error,
  setError,
}) {
  // use

  return (
    <div>
      <div className={styles.header}>
        <TotalScore
          score={score}
          setScore={setScore}
          selectedNumber={selectedNumber}
        />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <div className={styles.content}>
        <RollDice
          currentDice={currentDice}
          setCurrentDice={setCurrentDice}
          score={score}
          setScore={setScore}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}
