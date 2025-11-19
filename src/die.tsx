import type { JSX } from "react";

type DieProps = {
  isHeld: boolean;
  hold: boolean;
  value: number;
};

export default function Die({ isHeld, hold, value }): JSX.Element {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
