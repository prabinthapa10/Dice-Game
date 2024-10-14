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
}) {
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
        />
      </div>
      <div className={styles.content}>
        <RollDice />
      </div>
    </div>
  );
}
