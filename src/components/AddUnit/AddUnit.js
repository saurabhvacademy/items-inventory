import './AddUnit.css';
import React, { useState } from 'react';
import { addUnit } from "../../services/apis.service";


function AddUnit(props) {
    const [unitValue, setUnitValue] = useState("");
    const [unitBase, setUnitBase] = useState("");
    function handleUnitValueChange(e){
        setUnitValue(e.target.value)
    }
    function handleUnitBaseChange(e){
        setUnitBase(e.target.value)
    }
    function callAddUnit(){
        addUnit({
            value:unitValue,
            baseUnit:unitBase
        })

    }
    return <div>
        <div>
        <i className="fa fa-window-close" aria-hidden="true" onClick={()=>props.closeModalFunction()}></i>
        </div>
        <div className="form-floating mb-3">
            <input type="text" onChange={handleUnitBaseChange} value={unitBase} className="form-control" id="label" placeholder="unit(kg,ltr, etc..)" />
                <label htmlFor="label">Base Unit</label>
        </div>
        <div className="form-floating">
            <input type="text" onChange={handleUnitValueChange} value={unitValue} className="form-control" id="value" placeholder="Value" />
                <label htmlFor="value">Value</label>
        </div>
        <button onClick={callAddUnit}>Add Unit</button>
    </div>

}

export default AddUnit;