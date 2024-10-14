import React, { useState } from "react";
import styles from "./NumberSelector.module.css";

export default function NumberSelector({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) {
  const array = [1, 2, 3, 4, 5, 6];

  function handleClick(i) {
    setSelectedNumber(i);
    setError("");
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.error}>{error}</div>
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
