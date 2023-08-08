import React, { useState } from 'react';
import ItemsViewer from './ItemsViewer';
import './EditItem.css';


function EditItem(props) {
    const [filteredItems, setFilteredItems] = useState('');
    const [filter, setFilter] = useState({});
    let items = JSON.parse(localStorage.getItem('items'));
    
    let onchangeNameFiltereHandler = function (e) {
        setFilter({
            name:e.target.value,
            id:filter.id
        });
       
    }
    let onchangeIdFiltereHandler = function (e) {
         setFilter({
            name:filter.name,
            id:e.target.value
        });
    }
    let applyFilter = function () {
        let tempFilteredItems = []
        items.forEach(item => {
            if (filter.id != '' && filter.id == item.id) {
                tempFilteredItems.push(item);
            } else if (filter.name != '' && item.name.includes(filter.name)) {
                tempFilteredItems.push(item);
            } else if (filter.name == '' && filter.id == '') {
                tempFilteredItems = items;
            }
        });
        setFilteredItems(tempFilteredItems);
    }
    return <div>
        <div className='filterContainer'>
            <div className='width200 filter input-group input-group-sm mb-3'>
                <label className="input-group-text"> ID </label>
                <input className="form-control" onChange={onchangeIdFiltereHandler} type='number' />
            </div>
            <div className='filter input-group input-group-sm mb-3'>
                <label className="input-group-text"> Name </label>
                <input className="form-control" onChange={onchangeNameFiltereHandler} type='text' />
            </div>
            <button className='btn btn-secondary applyFilterButton' onClick={applyFilter}>apply filter</button>

        </div>
        <div className='itemsContainer'>
            <ItemsViewer data={filteredItems}></ItemsViewer>
        </div>
    </div>

}

export default EditItem;