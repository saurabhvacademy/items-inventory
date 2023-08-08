import React, { useState } from "react";
import './AddItems.css'
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

    function onChangeValue(e) {
        const value = e.target.value;
        switch (e.target.id) {
            case 'name': setName(value);
                break;
            case 'hsn': setHsn(value);
                break;
            case 'totalBaught': if(value<totalSoldCount){
                setBaughtCount(0);
                alert("bought count can't be less than sold count");}
                else setBaughtCount(value);
                break;
            case 'totalSold': setTotalSoldCount(value);
                break;
            case 'costPrice': setCostPrice(value);
                break;
            case 'salePrice': setSellPrice(value);
                break;
            default: return;
        }
    }

    function onSelectUnit(id) {
        setUnitId(id);
    }

    function openModal() {
        setIsOpen(true);
    }

    const closeModal = function () {
        setIsOpen(false);
    }
    const saveItem = function () {
        item.HSN = HSN;
        item.costPrice = costPrice;
        item.name = name;
        item.salePrice = sellPrice;
        item.totalBaughtCount = totalBaughtCount;
        item.totalSoldCount = totalSoldCount;
        item.unitId = unitId;
        addItem(item);
    }
    let AllUnits = []
    AllUnits = getAllUnits();
    let labelVsUnits = {};
    AllUnits.forEach(unit => {
        const key = unit.label + '';
        labelVsUnits = { ...labelVsUnits, key: unit }
    });
    return <div>
        <div className="addItemContainer">
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">Name</label>
                <input id='name' className="form-control" onChange={onChangeValue} placeholder="Name of the item" type="text" />
            </div>
            
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">HSN</label>
                <input className="form-control" id="hsn" onChange={onChangeValue} type="text" />
            </div>
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">Baught</label>
                <input className="form-control" id="totalBaught" onChange={onChangeValue} placeholder="Total baught till now" type="number" />
            </div>
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">Sold</label>
                <input className="form-control" id="totalSold" onChange={onChangeValue} placeholder="Total sold till now" type="number" />
            </div>
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">CP</label>
                <input className="form-control" id="costPrice" onChange={onChangeValue} placeholder="Cost Price per unit" type="number" />
            </div>
            <div className="input-group input-group-sm mb-3">
                <label className="input-group-text">SP</label>
                <input className="form-control" id="salePrice" onChange={onChangeValue} placeholder="Sale price per unit" type="number" />
            </div>
            <div >
                <CustomDropDown onSelect={setUnitId} heading={'Unit'} className="form-control" data={AllUnits} labelKey={'label'} idKey={'id'} defaultValue={AllUnits[0]} />
            </div>
           
        </div>
        
        <div>
            <button className="btn btn-primary" onClick={saveItem}>Save Item</button>
            <button onClick={openModal} className="btn btn-primary floatRight"> Add Unit </button>
        </div>
        <Modal style={customStyles} isOpen={modalIsOpen}
            contentLabel="Add Unit Modal">
            <AddUnit closeModalFunction={closeModal}></AddUnit>
        </Modal>
    </div>

}

export default AddItems;