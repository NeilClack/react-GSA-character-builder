import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

function DraggableLI({ id, stat, index, moveLi, stats }) {
  const style = {
    backgroundColor: "black",
    cursor: "move",
    borderStyle: "dashed",
  };

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "li",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveLi(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "li", id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  let t = 0;
  let resetStats = setInterval(function () {
    if (t === 1) {
      let z = 0;
      for (z = 0; z < stats.length; z++) {
        let statUpdate = document.getElementById(stats[z] + "-" + z);
        if (statUpdate != null) {
          let statStr = statUpdate.innerHTML;
          if (statStr.match(/-?\d+/g) != null) {
            let baseStat = statStr.match(/-?\d+/g).map(Number);
            let newStat = parseInt(
              document.getElementById(stats[z]).innerHTML,
              10
            );
            statUpdate.innerHTML =
              "&nbsp;" +
              (newStat + baseStat[2]) +
              "&nbsp;&nbsp;(" +
              newStat +
              " + " +
              baseStat[2] +
              ")";
          }
        }
      }
    }
    if (t === 2) clearInterval(resetStats);
    t++;
  }, 200);

  return (
    <React.Fragment>
      <li
        id={stat}
        ref={ref}
        style={{ ...style, opacity }}
        className="character-sheet-stat text-center text-glow"
      ></li>
    </React.Fragment>
  );
}

export default DraggableLI;
