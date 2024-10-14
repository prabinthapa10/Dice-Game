import React, { useState } from "react";
import styles from "./RollDice.module.css";
import Button from "../Button/Button.jsx";

export default function RollDice() {
  const [currentDice, setCurrentDice] = useState(1);
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function rollDice() {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
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
