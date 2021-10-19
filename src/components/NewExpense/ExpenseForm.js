import React, { useState } from "react";
import "./ExpenseForm.css";

// CREATES THE NEW EXPENSE WITH THE ENTERED VALUES
const ExpenseForm = (props) => {
  // SELECTORS
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // HANDLERS FOR TITLE, AMOUNT, DATE, AND SUBMIT
  const titleChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // console.log(e.target.value);
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // HOLDS THE ENTERED VALUE DATA
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // takes the pointer to the function in NewExpense to push the expense data to NewExpense.js
    props.onSaveExpenseData(expenseData);

    // RESETS THE VALUES TO BE BLANK AFTER SUBMIT
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
