import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{total < 0 ? `-$${Math.abs(total)}` : `$${total}`}</h1>
      {total < 0 && (
        <p style={{ color: "red" }}>
          Hey! Your Expenses is greater than your income
        </p>
      )}
    </>
  );
};
