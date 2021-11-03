import file from "../Data/data.json";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./PMAS.css";

//Declaring path to Country Abbreviation and pmas Values
const abrv = file.s;
const pmas = file.PMAS;

//Function to map the Two values into a hashmap with a " || " Divider
const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], "  ||  " + Math.round(values[i] * 1000));
  }
  return map;
};

//Calls the BuildMap Function and assigns to var result, and then cast to array.
let result = buildMap(abrv, pmas);
var arr = Array.from(result.entries());

const Data = () => {
  return (
    <div>
      {/* Card Header */}
      <Card className="pmas_card_header">
        <Card.Body className="pmas_card_header_body">
          <Card.Title className="pmas_title">PMAS</Card.Title>
        </Card.Body>
      </Card>

      {/* Card Body */}
      <Card className="pmas_card_body">
        {/* Maps Items from array to card list */}
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem className="pmas_list">{item}</ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default Data;
