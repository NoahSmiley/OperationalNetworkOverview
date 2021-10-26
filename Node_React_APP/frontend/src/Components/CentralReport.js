import React from 'react';
import BATV from './BATV';
import DelayedTime from './DelayedTime';
import PMAS from './PMAS';
import Technician from './Technician';

const CentralReport = () => {
    return (
        <div
            className="container"
            style={{background: "#CA1C0D;", display: "flexbox"}}
        >
            <div className="item" style={{display: "flexbox"}}>
                <BATV/>
            </div>
            <div className="item" style={{display: "flexbox"}}>
                <DelayedTime/>
            </div>
            <div className="item" style={{display: "flexbox"}}>
                <PMAS/>
            </div>
            <div className="item" style={{display: "flexbox"}}>
                <Technician/>
            </div>
        </div>
    )
}
export default CentralReport;