import React from "react";
import "./App.css";

import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import { MoneyProvider } from "./MoneyContext";

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <MoneyProvider>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionHistory />
          <AddTransaction />
        </div>
      </MoneyProvider>
    </div>
  );
}

export default App;
