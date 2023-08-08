
import AddItem from "./components/AddItems/AddItems";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import initialUnits from "./initialData/units.json";
import initialItems from "./initialData/items.json";
import './App.css';
import './cssVariables.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ItemsViewer from "./components/ItemsViewer";
import EditItem from "./components/EditItem";

class App extends Component {
  units = localStorage.getItem('units');
  items = localStorage.getItem('items');
  tabs = ['addItem', 'editItem', 'items'];
  constructor() {
    super();
    this.units = localStorage.getItem('units');
    this.items = localStorage.getItem('items');
    if (this.units) {
      localStorage.setItem('units', JSON.stringify(initialUnits["unitsArr"]));
    }
    if (!this.items) {
      localStorage.setItem('items', JSON.stringify(initialItems["itemsArr"]));
    }
    this.units = JSON.parse(localStorage.getItem('units'));
    this.items = JSON.parse(localStorage.getItem('items'));
    let idVsUnits = {};

    if (this.units.length > 0) {
      this.units.forEach(element => {
        idVsUnits[element.id] = element;
      });

    }
    if (this.items.length > 0 && this.units.length > 0) {
      this.items.forEach((element) => {
        element.unitLabel =
          idVsUnits[element.unitId] ? idVsUnits[element.unitId].label : '';
      });

    }
  }
  resetAll = () => {
    localStorage.clear();
    window.location.reload();
  }

  selectTab = (tab) => {
    this.tabs.forEach(tab =>{
      document.getElementById(tab).classList.remove('liSelected');
    })
    document.getElementById(tab).classList.add('liSelected');
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navigationBar">
            <Link to="/addItem" id="addItem" >
              <div onClick={event => this.selectTab('addItem')}>Add Item</div>
            </Link>
            <Link to="/items" id="items">
              <div onClick={event => this.selectTab('items')} >View Items</div>
            </Link>
            <Link to="/editItem" id="editItem">
              <div onClick={event => this.selectTab('editItem')}>Edit Item</div>
            </Link>
          </div>
          <Routes>
            <Route exact path='/' element={< AddItem />}></Route>
            <Route exact path='/addItem' element={< AddItem />}></Route>
            <Route exact path='/items' element={< ItemsViewer data={this.items} />}></Route>
            <Route exact path='/editItem' element={< EditItem data={this.items} />}></Route>
          </Routes>

        </div>

      </Router>
    );
  }
}

// function App() {

//   return (
//     <div className="app-container">Saurabh's first react App
//       <div className="add-item-container"><AddItem />
//       <button className="btn btn-danger move-to-bottom-right" onClick={resetAll}>RESET ALL</button></div>

//       <div className="gridContainer"><ShowGrid data={items} gridConfig={gridConfig}></ShowGrid></div>
//     </div>

//   );
// }

export default App;
