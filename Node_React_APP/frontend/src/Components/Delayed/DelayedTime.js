import file from "../Data/data.json";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./Delayed.css";

//Declaring path to Country Abbreviation and times Values
const abrv = file.s;
const times = file.central;

//Function to map the Two values into a hashmap with a " || " Divider
const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], "  ||  " + values[i]);
  }
  return map;
};

//Calls the BuildMap Function and assigns to var result, and then cast to array.
let result = buildMap(abrv, times);
var arr = Array.from(result.entries());
console.log(result.keys());

const DelayedTime = () => {
  return (
    <div>
      {/* Card Header */}
      <Card className="time_card_header">
        <Card.Body className="time_card_header_body">
          <Card.Title className="time_card_title">
            EXTREMELY DELAYED TIME
          </Card.Title>
        </Card.Body>
      </Card>
      {/* Card Body */}
      <Card className="time_card_body">
        {/* Maps Items from array to card list */}
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem className="time_card_header_body">
              {item}
            </ListGroupItem>
          </ListGroup>
        ))}
      </Card>

      {/* Card Header */}
      <Card className="time_card_header_bottom">
        <Card.Body className="time_card_header_body">
          <Card.Title className="time_card_title">DELAYED TIME</Card.Title>
        </Card.Body>
      </Card>

      {/* Card Body */}
      <Card className="time_card_body">
        {/* Maps Items from array to card list */}
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem className="time_card_header_body">
              {item}
            </ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default DelayedTime;
