import React, { useContext } from "react";
import { MoneyContext } from "../MoneyContext";

function Balance() {
  const { amount, loading } = useContext(MoneyContext);
  const amounts = amount.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="Balance">
      {loading ? "Loading....." : ""}
      <h4>YOUR BALANCE</h4>
      <h1>&#8377;{total}</h1>
    </div>
  );
}

export default Balance;
