import React from "react";
import PowerIcon from "@material-ui/icons/Power";
import PowerOffIcon from "@material-ui/icons/PowerOff";

export default function Power({ power, setPower, setDrumSoundName }) {
  return (
    <div
      className="power"
      onClick={() => {
        setPower(!power);
        setDrumSoundName("");
      }}
    >
      {power ? (
        <PowerIcon style={{ fontSize: 40, color: "green" }} />
      ) : (
        <PowerOffIcon style={{ fontSize: 40, color: "red" }} />
      )}
    </div>
  );
}
