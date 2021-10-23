import React, { useEffect, useState } from "react";
import file from "../data.json";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const abrv = file.s;
const pmas = file.PMAS;

const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], "  ||  " + Math.round(values[i] * 1000));
  }
  return map;
};

let result = buildMap(abrv, pmas);
var arr = Array.from(result.entries());
console.log(result.keys());

const Data = () => {
  return (
    <Card
      style={{
        display: "flexbox",
        width:"150%",
        flexDirection: "col",
        overflow: "scroll",
        fontSize:"20px",
        color:"black",
        height:"37vw",

        // "margin-left":"30px",
        //  "margin-right" :"30px",

      }}
    >
      <Card.Body style ={{textAlign:"center",display:"flexbox"}}>
        <Card.Title style = {{"font-weight":"bolder"}}>PMAS</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      {arr.map((item) => (
        <ListGroup className="list-group-flush">
          <ListGroupItem style ={{textAlign:"center",display:"flexbox"}}>{item}</ListGroupItem>
        </ListGroup>
      ))}

    </Card>
  );
};
export default Data;
