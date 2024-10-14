import React, { useState } from "react";
import styles from "./NumberSelector.module.css";

export default function NumberSelector({ selectedNumber, setSelectedNumber }) {
  const array = [1, 2, 3, 4, 5, 6];

  function handleClick(i) {
    setSelectedNumber(i);
    return console.log(selectedNumber);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          {array.map((i) => (
            <span
              onClick={() => handleClick(i)}
              key={i}
              className={
                selectedNumber === i ? styles.selectedNumber : styles.number
              }
            >
              {i}
            </span>
          ))}
        </div>
        <div className={styles.text}>Selected Number</div>
      </div>
    </div>
  );
}
