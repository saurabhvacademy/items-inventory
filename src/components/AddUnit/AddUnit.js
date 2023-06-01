import './AddUnit.css';
import React from 'react';

function AddUnit(props) {
    return <div>
        <div className="form-floating mb-3">
            <input type="email" class="form-control" id="label" placeholder="name@example.com" />
                <label for="label">Label</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="value" placeholder="Password" />
                <label for="value">Value</label>
        </div>
    </div>

}

export default AddUnit;