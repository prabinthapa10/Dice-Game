import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, isBlackBg, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={isBlackBg ? styles.blackBg : styles.whiteBg}
      >
        {text}
      </button>
    </div>
  );
}
