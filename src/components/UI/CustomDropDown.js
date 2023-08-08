
import React, { useState } from 'react';
import './CustomDropDown.css';

const CustomDropDown = (props) => {
    const [expand, setExpand] = useState("");
    const [defaultValue, setDefaultValue] = useState(props.defaultValue);
    let idKey = props.idKey;
    let labelKey = props.labelKey
    let data = props.data;
    let heading = props.heading;

    let toggleDropDown = function () {
        setExpand(!expand);
    }
    let onSelect = props.onSelect;
    let selectUnit = function(e){
        data.forEach(element => {
            if(element[idKey] === parseInt(e.target.id)){
                setDefaultValue(element);
                onSelect(e.target.id);
                setExpand(!expand);
            }
            
        });
    }
    return <div className="input-group input-group-sm mb-3">
        <label className="input-group-text">{heading}</label>
        <input readOnly className="form-control" value={defaultValue.label} onClick={toggleDropDown} />
        <div className={`dropDiv ${expand ? '' : 'displayNone'}`}>{data.map((element) => {
            return <div id={element[idKey]} onClick={selectUnit}>{element[labelKey]}</div>
        })}</div></div>
}

export default CustomDropDown;