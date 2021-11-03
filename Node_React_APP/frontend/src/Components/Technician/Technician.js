import React from "react";
import file from "../Data/data.json";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Technician.css";

//Declaring path to Country Abbreviation
const abrv = file.s;

//Function to map the values into a hashmap
const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i]);
  }
  return map;
};

//Calls the BuildMap Function and assigns to var result, and then cast to array.
let result = buildMap(abrv);
var arr = Array.from(result.entries());

const Technician = () => {
  return (
    <div>
      {/* Card Header */}
      <Card className="tech_card_header">
        <Card.Body className="tech_card_header_body">
          <Card.Title className="tech_card_title">
            STATIONS IN SERVICE
          </Card.Title>
        </Card.Body>
      </Card>

      {/* Card Body */}
      <Card className="tech_card_body">
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            {/* Maps Items from array to card list */}
            <ListGroupItem className="tech_list">{item}</ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default Technician;
