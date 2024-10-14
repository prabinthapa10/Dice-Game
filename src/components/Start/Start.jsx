import React from "react";
import styles from "./Start.module.css";
import Button from "../Button/Button";

export default function Start({ setToggle }) {
  return (
    <div>
      <div className={styles.container}>
        <img src="/images/dices.png" alt="" />
        <div>
          <h1 className={styles.title}>Dice Game</h1>
          <Button
            className={styles.button}
            text="Play Now"
            setToggle={setToggle}
            isBlackBg={true}
          />
        </div>
      </div>
    </div>
  );
}
