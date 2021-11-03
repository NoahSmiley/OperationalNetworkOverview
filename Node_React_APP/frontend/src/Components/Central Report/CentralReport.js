import React from "react";
import BATV from "../BATV/BATV";
import DelayedTime from "../Delayed/DelayedTime";
import PMAS from "../PMAS/PMAS";
import Technician from "../Technician/Technician";

//Central Report Component, Collects all subcomponents into one modular Section
const CentralReport = () => {
  return (
    <div className="container">
      <div className="item">
        <BATV />
      </div>
      <div className="item">
        <DelayedTime />
      </div>
      <div className="item">
        <PMAS />
      </div>
      <div className="item">
        <Technician />
      </div>
    </div>
  );
};
export default CentralReport;
