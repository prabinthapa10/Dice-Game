import React, { useState } from "react";
import styles from "./RollDice.module.css";
import Button from "../Button/Button.jsx";

export default function RollDice({
  currentDice,
  setCurrentDice,
  score,
  setScore,
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function rollDice() {
    // will return nothing is number is not selected
    if (!selectedNumber) {
      setError("You haven't selected any number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (randomNumber == selectedNumber) {
      setScore(score + selectedNumber);
    } else {
      setScore(score - selectedNumber);
    }
    setSelectedNumber(null);
  }

  return (
    <div>
      <div className={styles.container}>
        <img
          onClick={rollDice}
          src={`/images/Dice/dice_${currentDice}.png`}
          alt="dice"
        />
        <p>Click on Dice to roll {currentDice}</p>
        <Button text="Reset Score" />
        <Button text="Show Rules" isBlackBg={true} />
      </div>
    </div>
  );
}
