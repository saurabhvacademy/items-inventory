import React from "react";
import './Grid.css';

function ShowGrid(props) {
    let data = [];
    let gridConfig = {};
    gridConfig = props.gridConfig;
    data = props.data;

    return <div>
        <div className="grid-container">
            <div className="grid-header-row">
                {gridConfig.cols.map((col) => (
                    <div className="header-cell">{col.heading}</div>
                ))}
            </div>
            <div className="data-rows-container">
                {data.map((item => (<div className="grid-data-row">
                    {gridConfig.cols.map(col => (<div className="data-cell">{item[col.key]}</div>))}
                </div>)))}
            </div>
        </div>
    </div>
}

export default ShowGrid;