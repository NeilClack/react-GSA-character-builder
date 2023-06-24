import React from "react";
// character data
import RaceContent from "../store/data/raceContent";
// import ClassContent from '../store/data/classContent';
// components
import CharacterRaceStep from "./components/CharacterRaceStep";
import CharacterClassStep from "./components/CharacterClassStep";

let glowSize = 0;
let peakTime = 0;
let glowDirection = "up";
setInterval(function () {
  let textGlow = document.querySelectorAll(".text-glow");
  if (glowSize <= 15 && glowDirection === "up") {
    glowSize++;
    if (glowSize === 15) glowDirection = "down";
  }
  if (glowDirection === "down") {
    if (peakTime >= 20 && peakTime % 2 === 0) glowSize--;
    peakTime++;
    if (glowSize === 0) glowDirection = "up";
  }
  [...textGlow].forEach(
    (e) => (e.style.textShadow = `0 0 ${glowSize}px rgba(0,255,65,1)`)
  );
}, 10);

function CharacterCreationPage() {
  return (
    <>
      <div id="CharacterRaceStep">
        <CharacterRaceStep races={RaceContent} />
      </div>
      <div id="CharacterClassStep" style={{ display: "none" }}>
        <CharacterClassStep races={RaceContent} />
      </div>
    </>
  );
}

export default CharacterCreationPage;
