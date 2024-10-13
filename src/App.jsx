import React, { useState } from "react";
import Start from "./components/Start/Start";
import GamePlay from "./components/GamePlay/GamePlay";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div>{toggle ? <GamePlay /> : <Start setToggle={setToggle} />}</div>
    </div>
  );
}
