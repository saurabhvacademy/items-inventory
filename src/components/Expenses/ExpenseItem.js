import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Container from '../UI/Container';
import { useState } from 'react';
import React from 'react';
import { getAllUsers } from '../../services/apis.service'
function ExpenseItem(props) {
    const [expense, setExpense]=useState(props.expense);
    const id = expense.id;

    const changeTitle = ()=>{
        console.log("RESPONSE FROM API", getAllUsers());
        expense.title = 'Changed Title';
        setExpense({...expense});
    }
    return (
    <Container id={id} class_name={'expense-item'}>
        <ExpenseDate date = {expense.date}/>
        <div className='expense-item_expense-details'>
            <h2>{expense.title}</h2>
            <div>${expense.amount}</div>
        </div>
        <button className='primaryButton' onClick={changeTitle}>Change title</button>
    </Container>);
}

export default ExpenseItem;