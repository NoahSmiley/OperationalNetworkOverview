import React, { useEffect, useState } from "react";
import file from "../data.json";
import Card from "@mui/material/Button";
import "./PMAS.css";

const abrv = file.s;
const pmas = file.PMAS;

const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], "     " + Math.round(values[i] * 1000));
  }
  return map;
};
let result = buildMap(abrv, pmas);
var arr = Array.from(result.entries());
console.log(result.keys());

const Data = () => {
  return (
    <div style={{ "margin-left": "900px" }}>
      <h3 style={{ "margin-bottom": "-2px" }}>PMAS</h3>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "scroll",
          overflowScrolling: "touch",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <Card
          style={
            ({ flexDirection: "row" },
            { flex: 1, flexWrap: "wrap" },
            { background: "white" },
            { display: "inline-grid", overflow: "auto" })
          }
        >
          {arr.map((item) => (
            <Card
              variant="outlined"
              style={{
                background: "#191b20",
                color: "white",
                width: "200px",
                fontSize: "20px",
              }}
            >
              {item}
            </Card>
          ))}
        </Card>
      </div>
    </div>
  );
};
export default Data;
