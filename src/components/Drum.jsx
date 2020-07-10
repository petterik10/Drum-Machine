import React, { useState, useEffect } from "react";
import drums from "./drums";

function Drum() {

  // declare a state variable drumsound with initial value empty string
  const [drumSound, setdrumSound] = useState("");

  // declare a state variable power with initial value false
  const [power, setPower] = useState(false);

  // declare function handleKeyDown to keydown events
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

  });


  const handleClick = (event) => {
    if (power) {
      let clickedButton = event.target.id;

      drums.forEach(elem => {
        if (elem.name === clickedButton) {
          let audio = new Audio(elem.src);
          audio.play();
          document.getElementById(elem.name).classList.add("pressed");
          setTimeout(() => {
            document.getElementById(elem.name).classList.remove("pressed");
          }, 1000)
        }
        return () => clearTimeout();
      });
      setdrumSound(clickedButton);
    }

  }

  const handleKeyDown = (event) => {
    if (power) {
      let clickedButton;
      let pressedKey = event.keyCode;

      drums.forEach(elem => {
        if (elem.keycode == pressedKey) {
          let audio = new Audio(elem.src);
          audio.play();
          clickedButton = elem.name;
          document.getElementById(elem.name).classList.add("pressed");
          setTimeout(() => {
            document.getElementById(elem.name).classList.remove("pressed");
          }, 1000)

        }
        return () => clearTimeout();
      });
      setdrumSound(clickedButton);
    }
  }

  const handlePowerOn = () => {
    setPower(true);
  }

  const handlePowerOff = () => {
    setPower(false);
    setdrumSound("");
  }

  return (
    <div class="wrapper2">

      <div class="display"> {drumSound} </div>
      <div class="container">
        <div class="drum-master row">

          <div onClick={handleClick}
            className="drum-pad col-sm-3"
            id="Snare"
          >
            Q
          </div>
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Bass 1">
            W
          </div>
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Bongo">
            E
          </div>
        </div>

        <div class="drum-master row">
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Tom Tom">
            A
          </div>
          <div onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Bass 3">
            S
          </div>
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Shotgun">
            D
          </div>
        </div>

        <div class="drum-master row">
          <div
            onClick={handleClick}
            id="Kick Hat"
            class="drum-pad col-sm-3">
            Z
        </div>
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Hit">
            X
          </div>
          <div
            onClick={handleClick}
            class="drum-pad col-sm-3"
            id="Closed">
            C
          </div>
        </div>

        <div className="power">
          <div className="power-header"
            style={{ backgroundColor: power ? "chartreuse" : "red" }}>
            Power
          </div>
          <button onClick={handlePowerOn} className="power-on"> On </button>
          <button onClick={handlePowerOff} className="power-off"> Off </button>
        </div>
      </div>
    </div>
  )
}

export default Drum;
