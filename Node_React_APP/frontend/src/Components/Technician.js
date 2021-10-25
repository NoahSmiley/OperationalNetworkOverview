import React from "react";
import file from "../data.json";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const abrv = file.s;
const batv = file.BATV;

const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i]);
  }
  return map;
};
let result = buildMap(abrv, batv);
var arr = Array.from(result.entries());

const Technician = () => {
  return (
    <div>
      <Card
        style={{
          display: "flexbox",
          width: "120%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "25px",
          color: "black",
          "margin-left": "-40%",
          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        <Card.Body style={{ textAlign: "center", display: "flexbox" }}>
          <Card.Title style={{ "font-weight": "bolder",fontSize: "25px",}}>STATIONS IN SERVICE</Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          display: "flexbox",
          width: "120%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "20px",
          color: "black",
          height: "37vw",
          "margin-left": "-40%",

          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ textAlign: "center", display: "flexbox",background:"#f9f9f9"}} >{item}</ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default Technician;
