import React from "react";
import "../style/graphs.scss";
import AnimatedNumber from "./AnimatedNumber";

function Graphs({ data, visible }) {
  return (
    <>
    <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
        viewBox="0 0 70 40"
        className="graphs-frame"
      >
      {data.map((bar, i) => (
        <>
          <AnimatedNumber bar={bar} animateOnce={true} index={i} />
          <line
            x1={10 + 12*i}
            y1="30"
            x2={10 + 12*i}
            y2={30 - 20*((bar.value)/100)}
            className={visible ? "line bar-one-animated" : "line bar-one"}
            key={i}
          ></line>
          <text className="names" x={10 + 12*i} y="35" textAnchor="middle" key={"text"+i}>
              {bar.label}
          </text>
        </>
      ))}
    </svg>
    </>
  );
}

export default Graphs;
