import React, { useState, useCallback } from "react";
import DraggableLi from "./DraggableLi";
import update from "immutability-helper";

function CharachterSheet({ characterData }) {
  const stats = ["brawn", "agility", "vitality", "ego", "moxie", "luck"];

  const [li, setLi] = useState([
    {
      id: 0,
      stat: "brawn",
    },
    {
      id: 1,
      stat: "agility",
    },
    {
      id: 2,
      stat: "vitality",
    },
    {
      id: 3,
      stat: "ego",
    },
    {
      id: 4,
      stat: "moxie",
    },
    {
      id: 5,
      stat: "luck",
    },
  ]);

  const moveLi = useCallback(
    (dragIndex, hoverIndex) => {
      const dragli = li[dragIndex];
      setLi(
        update(li, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragli],
          ],
        })
      );
    },
    [li]
  );

  const renderLi = (li, index) => {
    return (
      <DraggableLi
        key={li.id}
        index={index}
        id={li.id}
        stat={stats[index]}
        moveLi={moveLi}
        stats={stats}
      />
    );
  };

  return (
    <>
      <div className="row character-sheet-row-1">
        <div className="col text-center text-glow">
          Name
          <br /> <input></input>
        </div>
        <div className="col-xs-2 text-glow">
          Race
          <br />
          <div className="text-glow"> {characterData[0]}</div>
        </div>
        <div className="col text-center text-glow">Class/Level</div>
        <div className="col">
          <div className="text-glow">Valor Points: </div>
          <div className="text-glow">Adv Points: </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 row">
          <div
            id="attribute-drag-message"
            className="col-12 text-glow"
            style={{ display: "none" }}
          >
            drag and drop Base Stats to re-assign ↓
          </div>
          <div className="col-6">
            {stats.map((stat, key) => (
              <div key={key} className="row character-sheet-stat text-glow">
                {stat}: <div className="text-glow" id={stat + "-" + key}></div>
              </div>
            ))}
          </div>
          <div className="col-6">
            <ul className="stat-drag-list">
              {li.map((li, i) => renderLi(li, i))}
            </ul>
          </div>
        </div>
        <div className="col-7 row">
          <div className="col-7 secondary-attributes">
            <div className="text-center stat-box">Defense</div>
            <div className="stat-box">
              <div>
                Physical: <span id="physical-defense"></span>
              </div>
              <div>Metaphysical:</div>
            </div>
            <div className="text-center stat-box">Attack Bonus</div>
            <div className="stat-box">
              <div>Melee:</div>
              <div>Ranged:</div>
            </div>
            <div className="stat-box">Speed:</div>
          </div>
          <div className="col-5">
            <div className="text-center stat-box stat-title">Wound Points</div>
            <div className="stat-box text-center">0</div>
            <div className="text-center stat-box stat-title">
              Infection Points
            </div>
            <div className="text-center stat-box">0</div>
            <div className="stat-box">SP: 0</div>
            <div className="stat-box">DR: 0</div>
          </div>

          <div className="col-6">
            <div className="stat-box skill-box">Athletics</div>
            <div className="stat-box skill-box">Acrobatics</div>
            <div className="stat-box skill-box">Mechanics</div>
            <div className="stat-box skill-box">Navigation</div>
            <div className="stat-box skill-box">Stealth</div>
            <div className="stat-box skill-box">Awareness</div>
          </div>
          <div className="col-6">
            <div className="stat-box skill-box">Computers</div>
            <div className="stat-box skill-box">Medicine</div>
            <div className="stat-box skill-box">Nature</div>
            <div className="stat-box skill-box">Persuasion</div>
            <div className="stat-box skill-box">Subterfuge</div>
            <div className="stat-box skill-box">Scavange</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharachterSheet;
