import React from "react";
import styles from "./Start.module.css";
import Button from "../Button/Button";

export default function Start({ setToggle }) {
  function handleClick() {
    setToggle(true);
  }
  return (
    <div>
      <div className={styles.container}>
        <img src="/images/dices.png" alt="" />
        <div>
          <h1 className={styles.title}>Dice Game</h1>
          <Button
            className={styles.button}
            text="Play Now"
            isBlackBg={true}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
