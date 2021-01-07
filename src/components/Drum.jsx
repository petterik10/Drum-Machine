import React, { useState, useEffect } from "react";
import drums from "./drums";
import DrumPad from "./DrumPad";
import DrumHeader from "./DrumHeader";
import Power from "./Power";

function Drum() {
  const [drumSoundName, setDrumSoundName] = useState("");
  const [power, setPower] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (sound) => {
    if (power) {
      const audio = new Audio(sound);
      audio.play();
    }
  };

  const handleKeyDown = (event) => {
    if (power) {
      let pressedKey = event.keyCode;
      drums.forEach((elem) => {
        if (elem.keycode === pressedKey) {
          const audio = new Audio(elem.src);
          audio.play();
          setDrumSoundName(elem.name);
        }
      });
    }
  };

  return (
    <div className="wrapper1">
      <DrumHeader power={power} drumSoundName={drumSoundName} />
      <div className="wrapper2">
        <div className="container">
          {drums.map((drum) => {
            return (
              <DrumPad
                key={drum.name}
                setDrumSoundName={setDrumSoundName}
                handleClick={handleClick}
                drum={drum}
                power={power}
              />
            );
          })}
          <Power
            power={power}
            setPower={setPower}
            setDrumSoundName={setDrumSoundName}
          />
        </div>
      </div>
    </div>
  );
}

export default Drum;
