import React, { useContext } from "react";
import { MoneyContext } from "../MoneyContext";

function IncomeExpense() {
  const { amount } = useContext(MoneyContext);
  const amounts = amount.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="IncomeExpense">
      <div>
        <h4>INCOME</h4>
        <p className="income">&#x20B9;{income}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="expense">&#x20B9;{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
