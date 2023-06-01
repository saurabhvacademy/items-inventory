import { useState } from "react";
import React from 'react';


function NewExpense(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const onTitleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);

    }
    const onAmountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);        
    }
    const onDateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);        
    }
    return <div >
            <form>
                <div>      
                    <label>Title</label>           
                    <input type='text' id="expenseName" onChange={onTitleChangeHandler}  />
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' id="expenseName" onChange={onAmountChangeHandler}  />
                </div>
                <div>
                    <label>Date</label>
                    <input type='date' id="expenseName" onChange={onDateChangeHandler}  />
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>            
            </form>
        </div>

}

export default NewExpense;