import React, { useContext, useState } from "react";
import { MoneyContext } from "../MoneyContext";

function AddTransaction() {
  const { amount, addTransactions } = useContext(MoneyContext);

  const [text, setText] = useState("");
  const [textAmount, setTextAmount] = useState(0);

  const getText = (e) => {
    setText(e.target.value);
  };
  const getTextAmount = (e) => {
    setTextAmount(parseInt(e.target.value));
  };

  const updateValues = (e) => {
    e.preventDefault();
    addTransactions(text, textAmount);
    setText("");
    setTextAmount(0);
  };
  return (
    <div className="AddTransaction">
      <h3>Add new Transaction</h3>
      <hr></hr>
      <form onSubmit={updateValues}>
        <p>Text</p>
        <input
          type="text"
          placeholder="Enter text.."
          value={text}
          onChange={getText}
        ></input>
        <p>
          Amount <br></br>(negative-expense, positive-income)
        </p>
        <input
          type="number"
          step="5"
          placeholder="Enter amount..."
          value={textAmount}
          onChange={getTextAmount}
        ></input>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
