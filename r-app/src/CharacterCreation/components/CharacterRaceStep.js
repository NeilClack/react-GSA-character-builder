import React, { useState } from "react";
import Modal from "react-modal";
import CharacterSheet from "./CharacterSheet";

function CharacterRaces({ races }) {
  Modal.setAppElement("#root");
  const customStyles = {
    overlay: {
      zIndex: "1",
      pointerEvents: "none",
      backgroundColor: "unset !important",
    },
    content: {
      zIndex: "2",
      top: "15%",
      left: "25%",
      right: "33%",
      marginRight: "-30%",
      color: "#00FF41",
      borderColor: "#00FF41",
      backgroundColor: "black",
      pointerEvents: "auto",
    },
  };

  const [modalIsOpen, setModalState] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  });

  function setModalIsOpen(key) {
    setModalState((prevState) => ({
      ...prevState,
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false,
    }));
    setModalState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  }

  function rollBaseStats(key) {
    let backendData = races[1][key][1].backendData;
    var brawnMod = 0,
      agilityMod = 0,
      vitalityMod = 0,
      egoMod = 0,
      moxieMod = 0,
      luckMod = 0,
      wildcards = 0;

    let brawn = Math.floor(Math.random() * 6) + 1;
    let agility = Math.floor(Math.random() * 6) + 1;
    let vitality = Math.floor(Math.random() * 6) + 1;
    let ego = Math.floor(Math.random() * 6) + 1;
    let moxie = Math.floor(Math.random() * 6) + 1;
    let luck = Math.floor(Math.random() * 6) + 1;

    for (let i = 0; i < backendData.attributes.length; i++) {
      switch (backendData.attributes[i][1]) {
        case "brawn":
          brawnMod = backendData.attributes[i][0];
          break;
        case "agility":
          agilityMod = backendData.attributes[i][0];
          break;
        case "vitality":
          vitalityMod = backendData.attributes[i][0];
          break;
        case "ego":
          egoMod = backendData.attributes[i][0];
          break;
        case "moxie":
          moxieMod = backendData.attributes[i][0];
          break;
        case "luck":
          luckMod = backendData.attributes[i][0];
          break;
        case "wildcard":
          wildcards += backendData.attributes[i][0];
          break;
        default:
          console.log("Failed to match any case!");
      }
    }

    document.getElementById("brawn-0").innerHTML =
      "&nbsp;" +
      (brawn + brawnMod) +
      "&nbsp;&nbsp;(" +
      brawn +
      " + " +
      brawnMod +
      ")";
    document.getElementById("agility-1").innerHTML =
      "&nbsp;" +
      (agility + agilityMod) +
      "&nbsp;&nbsp;(" +
      agility +
      " + " +
      agilityMod +
      ")";
    document.getElementById("vitality-2").innerHTML =
      "&nbsp;" +
      (vitality + vitalityMod) +
      "&nbsp;&nbsp;(" +
      vitality +
      " + " +
      vitalityMod +
      ")";
    document.getElementById("ego-3").innerHTML =
      "&nbsp;" + (ego + egoMod) + "&nbsp;&nbsp;(" + ego + " + " + egoMod + ")";
    document.getElementById("moxie-4").innerHTML =
      "&nbsp;" +
      (moxie + moxieMod) +
      "&nbsp;&nbsp;(" +
      moxie +
      " + " +
      moxieMod +
      ")";
    document.getElementById("luck-5").innerHTML =
      "&nbsp;" +
      (luck + luckMod) +
      "&nbsp;&nbsp;(" +
      luck +
      " + " +
      luckMod +
      ")";

    document.getElementById("brawn").innerHTML = brawn;
    document.getElementById("agility").innerHTML = agility;
    document.getElementById("vitality").innerHTML = vitality;
    document.getElementById("ego").innerHTML = ego;
    document.getElementById("moxie").innerHTML = moxie;
    document.getElementById("luck").innerHTML = luck;

    //sub attributes (only physicall defense at the moment)
    document.getElementById("physical-defense").innerHTML = backendData
      .subAttributes[0]
      ? backendData.subAttributes[0][0]
      : "";

    document.getElementById("attribute-drag-message").style.display = "block";
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4 offset-sm-4 text-center">
          <h1 className="text-glow">Choose your characters race</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3 race-col">
          <ul className="basic-list">
            {races[1].map((race, key) => (
              <li key={key} onClick={() => setModalIsOpen(key)}>
                <h3 className="text-glow">{race[0]}</h3>
                <Modal
                  id={"modal-" + key}
                  isOpen={modalIsOpen[key]}
                  style={customStyles}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 text-glow">
                        <h2 className="text-glow">{race[0]}</h2>
                        <div className="race-discription text-glow">
                          {race[1].discription}
                        </div>
                        <h2 className="text-glow">Attributes</h2>
                        {race[1].attributes}
                        <br />

                        <button onClick={() => rollBaseStats(key)}>
                          Generate Stats
                        </button>
                      </div>

                      <div className="col-sm-6">
                        <CharacterSheet characterData={race} />
                      </div>
                    </div>
                  </div>
                </Modal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CharacterRaces;
