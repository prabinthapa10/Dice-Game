import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, isBlackBg, setToggle }) {
  function handleButton() {
    setToggle(true);
  }
  return (
    <div>
      <button
        onClick={handleButton}
        className={isBlackBg ? styles.blackBg : styles.whiteBg}
      >
        {text}
      </button>
    </div>
  );
}
