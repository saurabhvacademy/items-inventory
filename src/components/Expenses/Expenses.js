import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
import React from "react";
function Expenses(props){
    let reader = new FileReader();
    const expenses = props.expenses;
    const uploadFileHandler = (event) => {

        
    }
    const ExpenseItems = expenses.map(exp=>{
        return <ExpenseItem expense={exp}></ExpenseItem>
    })
    return <div>
        <NewExpense></NewExpense>
    {ExpenseItems}

    <input type='file' onChange = {uploadFileHandler}/>

    </div>
}

export default Expenses;