
import React, { useState } from 'react';
import './CustomDropDown.css';

const CustomDropDown = (props) => {
    const [totalBaughtCount, setBaughtCount] = useState("");
    let idKey = props.idKey;
    let labelKey = props.labelKey
    let data = props.data;
    let defaultValue = props.defaultValue;
    let expand = false;
    let toggledDisplayClass = 'displayNone'
    let dropDownItems = data.map((element)=>{
        return <div>{element[labelKey]}</div>
    })
    return <div><label>{defaultValue.label}</label><div className={toggledDisplayClass}>{dropDownItems}</div></div>
}

export default CustomDropDown;