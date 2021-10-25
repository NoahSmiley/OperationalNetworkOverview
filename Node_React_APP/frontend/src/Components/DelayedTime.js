import file from "../data.json";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

const abrv = file.s;
const pmas = file.central;

const buildMap = (keys, values) => {
  const map = new Map();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], "  ||  " + values[i]);
  }
  return map;
};

let result = buildMap(abrv, pmas);
var arr = Array.from(result.entries());
console.log(result.keys());

const DelayedTime = () => {
  return (
    <div>
      <Card
        style={{
          display: "flexbox",
          width: "150%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "25px",
          color: "black",
          "margin-left": "-60%",
          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        <Card.Body style={{ textAlign: "center", display: "flexbox" }}>
          <Card.Title style={{ "font-weight": "bolder", fontSize: "25px" }}>
            EXTREMELY DELAYED TIME
          </Card.Title>
        </Card.Body>

      </Card>
      <Card
        style={{
          display: "flexbox",
          width: "150%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "20px",
          color: "black",
          height: "16.25vw",
          "margin-left": "-60%",

          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >

        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ textAlign: "center", display: "flexbox" }}>
              {item}
            </ListGroupItem>
          </ListGroup>
        ))}
      </Card>
      <Card
        style={{
          display: "flexbox",
          width: "150%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "25px",
          color: "black",
          "margin-left": "-60%",
          "margin-top": "5%",
          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >
        <Card.Body style={{ textAlign: "center", display: "flexbox" }}>
          <Card.Title style={{ "font-weight": "bolder", fontSize: "25px" }}>
            DELAYED TIME
          </Card.Title>
        </Card.Body>

      </Card>
      <Card
        style={{
          display: "flexbox",
          width: "150%",
          flexDirection: "col",
          overflow: "scroll",
          fontSize: "20px",
          color: "black",
          height: "16.25vw",
          "margin-left": "-60%",

          // "margin-left":"30px",
          //  "margin-right" :"30px",
        }}
      >

        {arr.map((item) => (
          <ListGroup className="list-group-flush">
            <ListGroupItem style={{ textAlign: "center", display: "flexbox" }}>
              {item}
            </ListGroupItem>
          </ListGroup>
        ))}
      </Card>
    </div>
  );
};
export default DelayedTime;
