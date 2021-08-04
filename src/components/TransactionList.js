import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {React.Children.toArray(
          transactions.map((transaction) => (
            <Transaction transaction={transaction} />
          ))
        )}
      </ul>
    </>
  );
};
