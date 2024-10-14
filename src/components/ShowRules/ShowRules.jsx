import React from "react";
import styles from "./ShowRules.module.css";
export default function ShowRules() {
  function showRules() {
    return;
  }
  return (
    <div className={styles.container}>
      <h2>How to play dice game</h2>
      <div>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </div>
  );
}
