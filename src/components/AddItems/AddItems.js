import React, { useState } from "react";
import './AddItems.css'
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import AddUnit from '../AddUnit/AddUnit';
import Modal from 'react-modal'
import { getAllUnits, addItem } from "../../services/apis.service";
import CustomDropDown from "../UI/CustomDropDown";
import item from "../../initialData/itemModel.json"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function AddItems(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState("");
    const [HSN, setHsn] = useState("");
    const [totalBaughtCount, setBaughtCount] = useState("");
    const [totalSoldCount, setTotalSoldCount] = useState("");
    const [costPrice, setCostPrice] = useState("");
    const [sellPrice, setSellPrice] = useState("");
    const [unitId, setUnitId] = useState("");

    function onChangeValue(e){
        const value = e.target.value;
        switch(e.target.id){
            case 'name':setName(value);
            break;
            case 'hsn':setHsn(value);
            break;
            case 'totalBaught':setBaughtCount(value);
            break;
            case 'totalSold':setTotalSoldCount(value);
            break;
            case 'costPrice':setCostPrice(value);
            break;
            case 'salePrice':setSellPrice(value);
            break;
        }
    }

    function onSelectUnit(id){
        setUnitId(id);
    }

    function openModal() {
        setIsOpen(true);
      }

    const closeModal = function() {
        setIsOpen(false);
      }
      const saveItem = function() {
        item.HSN = HSN;
        item.costPrice = costPrice;
        item.name = name;
        item.salePrice = sellPrice;
        item.totalBaughtCount = totalBaughtCount;
        item.totalSoldCount = totalSoldCount;

        addItem(item);
      }
    let AllUnits = []
    AllUnits = getAllUnits();
    let labelVsUnits = {};
    AllUnits.forEach(unit => {
        const key = unit.label+'';
        labelVsUnits = {...labelVsUnits,key:unit}        
    });
    const defaultOption = AllUnits[0]
    return <div>
        <div className="addItemContainer">
            <div >
                <div><label>Name</label></div>
                <div><input id='name' onChange={onChangeValue} placeholder="Name of the item" type="text" /></div>
            </div>
            <div>
                <div><label>Unit <button onClick={openModal} className="btn btn-primary">+</button></label></div>
                <div><CustomDropDown data={AllUnits} labelKey={'label'} idKey={'id'} defaultValue = {AllUnits[0]}/></div>
            </div>
            <div>
                <div><label>HSN</label></div>
                <div><input id="hsn" onChange={onChangeValue} type="text" /></div>
            </div>
            <div>
                <div><label>Baught</label></div>
                <div><input id="totalBaught" onChange={onChangeValue} placeholder="Total baught till now" type="number" /></div>
            </div>
            <div>
                <div><label>Sold</label></div>
                <div><input id="totalSold" onChange={onChangeValue} placeholder="Total sold till now" type="number" /></div>
            </div>
            <div>
                <div><label>CP</label></div>
                <div><input id="costPrice" onChange={onChangeValue} placeholder="Cost Price per unit" type="number" /></div>
            </div>
            <div>
                <div><label>SP</label></div>
                <div><input id="salePrice" onChange={onChangeValue} placeholder="Sale price per unit" type="number" /></div>
            </div>
        </div>
        <div>
            <button className="btn btn-primary" onClick={saveItem}>Save Item</button>
        </div>
        <Modal style={customStyles}  isOpen={modalIsOpen}
           contentLabel="Add Unit Modal">
            <AddUnit closeModalFunction = {closeModal}></AddUnit>
           </Modal>
    </div>

}

export default AddItems;