import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// FUNCTION TAKES EXPENSES.JS DATA FROM APP.JS TO GE THE DATA, TITLE, AND AMOUNT... ALSO INCLUDES 'CHANGE TITLE' HANDLER BUTTON
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  // HANDLER FOR CHANGING EXPENSE ITEM TITLE
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
