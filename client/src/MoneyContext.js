import React, { useState, createContext, useEffect } from "react";

export const MoneyContext = createContext();

export const MoneyProvider = (props) => {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    const response = await fetch("/api/v1/transactions");
    const data = await response.json();
    setTransaction(data.data);
    setLoading(false);
  };
  const addTransactions = async (text, amount) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, amount: amount })
    };
    await fetch("/api/v1/transactions", requestOptions);
    setTransaction((prevAmount) => [
      ...prevAmount,
      { text: text, amount: amount }
    ]);
  };
  const deleteTransactions = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    await fetch(`/api/v1/transactions/${id}`, requestOptions);
  };
  const state = {
    amount: [...transaction],
    loading: loading
  };

  return (
    <MoneyContext.Provider
      value={{
        amount: state.amount,
        loading: state.loading,
        addTransactions,
        deleteTransactions
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};
