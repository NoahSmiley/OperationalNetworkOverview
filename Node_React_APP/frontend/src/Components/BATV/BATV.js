import file from "../Data/data.json";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BATV.css";
//Declaring path to Country Abbreviation and BATV Values
const abrv = file.s;
const batv = file.BATV;

//Function to map the Two values into a hashmap with a "|" Divider
const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], " | " + values[i]);
  }
  return map;
};

//Calls the BuildMap Function and assigns to var result, and then cast to array.
let result = buildMap(abrv, batv);
var arr = Array.from(result.entries());

const BATV = () => {
  return (
    <div style={{"font-family": 'Roboto'}}>
      
      {/* Card Header */}
      <Card className="card_header">
        <Card.Body className="card_header_body">
          <Card.Title className="card_title">BATV</Card.Title>
        </Card.Body>
      </Card>

      {/* Card Body */}
      <Card className="card_body">
        {/* Maps Items from array to card list */}
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem className="list_group">{item}</ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default BATV;
