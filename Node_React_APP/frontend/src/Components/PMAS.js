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
    <div>
      <Card
        style={{
          display: "flexbox",
          width: "100%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "20px",
          color: "black",
          "margin-left": "-25%",
          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        <Card.Body style={{ textAlign: "center", display: "flexbox" }}>
          <Card.Title style={{ "font-weight": "bolder",fontSize: "25px", }}>PMAS</Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          display: "flexbox",
          width: "100%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "20px",
          color: "black",
          height: "37vw",
          "margin-left": "-25%",
          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        
        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ textAlign: "center", display: "flexbox",background:"#f9f9f9"}}>
              {item}
            </ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default Data;
