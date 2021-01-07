import React from "react";

export default function DrumPad({ handleClick, setDrumSoundName, drum }) {
  return (
    <div
      className="drum"
      onClick={() => {
        handleClick(drum.src);
        setDrumSoundName(drum.name);
      }}
    >
      {drum.letter}
    </div>
  );
}
