
import AddItem from "./components/AddItems/AddItems";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import initialUnits from "./initialData/units.json";
import initialItems from "./initialData/items.json";
import './App.css';
import ShowGrid from "./components/UI/Grid";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function App() {
  const resetAll = () => {
    localStorage.clear();
    window.location.reload();
  }
  let units = localStorage.getItem('units');
  let items = localStorage.getItem('items');
  if (!units) {
    localStorage.setItem('units', JSON.stringify(initialUnits["unitsArr"]));
  }
  if (!items) {
    localStorage.setItem('items', JSON.stringify(initialItems["itemsArr"]));
  }

  units = JSON.parse(localStorage.getItem('units'));
  items = JSON.parse(localStorage.getItem('items'));
  let idVsUnits = {};

  if(units.length>0){
    units.forEach(element => {
      idVsUnits[element.id] = element;      
    });

  }
  if(items.length>0 && units.length>0){
    items.forEach((element) => { 
      element.unitLabel = 
      idVsUnits[element.unitId]? idVsUnits[element.unitId].label:'';      
    });
    console.log(items);

  }

  let gridConfig = {
    cols: [
      {
        key: 'name',
        heading: 'Name'
      },
      {
        key: 'HSN',
        heading: 'HSN'
      },
      {
        key: 'totalBaughtCount',
        heading: 'Items Bought'
      },
      {
        key: 'totalSoldCount',
        heading: 'Items Sold'
      },
      {
        key: 'costPrice',
        heading: 'CP'
      },
      {
        key: 'salePrice',
        heading: 'SP'
      },
      {
        key: 'unitLabel',
        heading: 'Unit'
      }
    ]
  }

  return (
    <div className="app-container">Saurabh's first react App
      <div className="add-item-container"><AddItem />
      <button className="btn btn-danger move-to-bottom-right" onClick={resetAll}>RESET ALL</button></div>
      
      <div className="gridContainer"><ShowGrid data={items} gridConfig={gridConfig}></ShowGrid></div>
    </div>

  );
}

export default App;
