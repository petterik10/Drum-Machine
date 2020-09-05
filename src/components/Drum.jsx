import React, { useState, useEffect } from "react";
import drums from "./drums";
import PowerIcon from "@material-ui/icons/Power";
import PowerOffIcon from "@material-ui/icons/PowerOff";

function Drum() {
  const [drumSound, setdrumSound] = useState("");
  const [power, setPower] = useState(false);

  useEffect(() => {
    console.log(drumSound);
  }, [drumSound]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (event) => {
    if (power) {
      let clickedButton = event.target.id;
      setdrumSound(clickedButton);
      event.target.children[0].play();
    }
  };

  const handleKeyDown = (event) => {
    if (power) {
      let pressedKey = event.keyCode;
      const options = document.getElementsByClassName("container")[0];
      for (let i = 0; i < options.children.length; i++) {
        if (options.children[i].getAttribute("keycode") == pressedKey) {
          options.children[i].children[0].play();
          setdrumSound(options.children[i].id);
        }
      }
    }
  };

  const handlePowerOn = () => {
    setPower((preValue) => {
      setdrumSound("")
      return !preValue;
    });
  };

  return (
    <div className="wrapper1">
      <div className="display"> {drumSound} </div>
      <div className="wrapper2">
        <div className="container">
          {drums.map((elem) => {
            return (
              <div
                onClick={handleClick}
                key={elem.name}
                id={elem.name}
                keycode={elem.keycode}
                className="drum"
              >
                {elem.letter}
                <audio id="audio">
                  <source src={elem.src} type="audio/mpeg" />
                </audio>
              </div>
            );
          })}
          <div className="power" onClick={handlePowerOn}>
            {power ? (
              <PowerIcon style={{ fontSize: 40, color: "green" }} />
            ) : (
              <PowerOffIcon style={{ fontSize: 40, color: "red" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drum;
