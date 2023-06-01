import React from "react";
import './AddItems.css'
import DropDown from 'react-dropdown';
import 'react-dropdown/style.css';
import AddUnit from '../AddUnit/AddUnit';
import Modal from 'react-modal'
import { getAllUsers } from "../../services/apis.service";

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
    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }
    const AllUsers = [{ value: '10 ltr', label: '10 ltr' }, { value: '20 ltr', label: '20 ltr' }];
    const defaultOption = AllUsers[0]
    return <div>
        <div className="addItemContainer">
            <div >
                <div><label>Name</label></div>
                <div><input placeholder="Name of the item" type="text" /></div>
            </div>
            <div>
                <div><label>Unit <button onClick={openModal} className="btn btn-primary">+</button></label></div>
                <div><DropDown options={AllUsers} value={defaultOption} /></div>
            </div>
            <div>
                <div><label>HSN</label></div>
                <div><input type="text" /></div>
            </div>
            <div>
                <div><label>Baught</label></div>
                <div><input placeholder="Total baught till now" type="number" /></div>
            </div>
            <div>
                <div><label>Sold</label></div>
                <div><input placeholder="Total sold till now" type="number" /></div>
            </div>
            <div>
                <div><label>CP</label></div>
                <div><input placeholder="Cost Price per unit" type="number" /></div>
            </div>
            <div>
                <div><label>SP</label></div>
                <div><input placeholder="Sale price per unit" type="number" /></div>
            </div>
        </div>
        <div>
            <button>Save Item</button>
        </div>
        <Modal style={customStyles}  isOpen={modalIsOpen}
           contentLabel="Add Unit Modal">
            <AddUnit></AddUnit>
           </Modal>
    </div>

}

export default AddItems;