import React, { useState } from "react";
import Modal from "react-modal";
import CharacterSheet from "./CharacterSheet";
import { rollBaseStats } from "../utils/utils";

const _DEFAULTMODALISOPENSTATE = {
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
}

function CharacterClass({ races }) {
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

  const [modalIsOpen, setModalState] = useState(_DEFAULTMODALISOPENSTATE);

  function setModalIsOpen(key) {
    setModalState({
      ..._DEFAULTMODALISOPENSTATE,
      [key]: true
    })
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

export default CharacterClass;
