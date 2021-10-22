import React, { useEffect, useState } from "react";
import file from "../data.json";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./voltage.png";

const abrv = file.s;
const batv = file.BATV;

const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], " | " + values[i]);
  }
  return map;
};
let result = buildMap(abrv, batv);
var arr = Array.from(result.entries());

const BATV = () => {
  return (
    <Card
      style={{
        height:"40vw",
        width: "10rem",
        display: "flexbox",
        flexDirection: "col",
        overflow: "scroll",
        fontSize:"20px",
        position:"flex",
      }}
    >
      <Card.Body style ={{textAlign:"center",display:"flexbox"}}>
        <Card.Title style = {{"font-weight":"bolder"}}>BATV</Card.Title>
      </Card.Body>
      {arr.map((item) => (
        <ListGroup className="list-group-flush">
          <ListGroupItem>{item}</ListGroupItem>
        </ListGroup>
      ))}
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default BATV;
