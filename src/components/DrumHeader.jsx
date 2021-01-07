import React from "react";

export default function DrumHeader({ power, drumSoundName }) {
  return (
    <div className="display">
      <div className="header">{power ? drumSoundName : ""}</div>
    </div>
  );
}
