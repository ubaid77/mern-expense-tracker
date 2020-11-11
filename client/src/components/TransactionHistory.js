import React, { useContext } from "react";
import { MoneyContext } from "../MoneyContext";

function TransactionHistory() {
  const { amount, deleteTransactions } = useContext(MoneyContext);
  return (
    <div className="TransactionHistory">
      <h3>History</h3>
      <hr></hr>
      {amount.map((item) => (
        <div className={item.amount < 0 ? "amountminus" : "amountplus"}>
          <div className="icon" onClick={() => deleteTransactions(item._id)}>
            X
          </div>
          <p>{item.text}</p>
          <p>
            {item.amount < 0 ? `-₹` : "₹"}
            {Math.abs(item.amount)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TransactionHistory;
