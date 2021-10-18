import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// CREATES A NEW EXPENSE FROM EXPENSEFORM.JS
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // Takes in the data entered from ExpenseForm.js and puts into expeseData with an ID
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      //
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          /* onSaveExpenseData calls on the saveExpenseDataHandler function in this component, which will take in the data entered in the Expense form and generate it into a different expenseData object with the inclusion of a random ID */ onSaveExpenseData={
            saveExpenseDataHandler
          }
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
