
import React from 'react';

function ExpenseDate(props){
    return <div className='expense-item_date'>{props.date.toDateString('MM DD YYYY')}</div>

}

export default ExpenseDate;