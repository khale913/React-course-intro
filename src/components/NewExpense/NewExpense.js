import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// CREATES A NEW EXPENSE FROM EXPENSEFORM.JS
const NewExpense = (props) => {
  // Takes in the data entered from ExpenseForm.js and puts into expeseData with an ID
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      //
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        /* onSaveExpenseData calls on the saveExpenseDataHandler function in this file, which will take in the data entered in the Expense form and generate it into a different expenseData object with the inclusion of a random ID */ onSaveExpenseData={
          saveExpenseDataHandler
        }
      />
    </div>
  );
};

export default NewExpense;
