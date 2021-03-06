import "./ExpenseForm.css";
import React, {useState} from 'react';
const ExpenseForm = () => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');


    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };
    const submitHandler= (e) => {
        e.preventDefault();
        console.log(enteredTitle);
        console.log(enteredAmount);
        console.log(enteredDate);
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.0.1" step="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className="new-expense_actions">
            <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
