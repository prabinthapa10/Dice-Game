import React from "react";
import styles from "./TotalScore.module.css";
export default function TotalScore({ score, setScore, selectedNumber }) {
  console.log((setScore = { score } + selectedNumber));
  return (
    <div>
      <div className={styles.container}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </div>
  );
}
