
import AddItem from "./components/AddItems/AddItems";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import initialUnits from "./initialData/units.json";
import initialItems from "./initialData/items.json";
import './App.css';
import ShowGrid from "./components/UI/Grid";

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
      }
    ]
  }

  return (
    <div>Saurabh's first react App
      {/* <Expenses expenses = {expenses} /> */}
      <AddItem />
      <button className="btn btn-danger move-to-bottom-right" onClick={resetAll}>RESET ALL</button>
      <ShowGrid data={items} gridConfig={gridConfig}></ShowGrid>
    </div>

  );
}

export default App;
