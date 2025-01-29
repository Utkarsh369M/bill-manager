import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill } from "../redux/actions";

const BillList = () => {
  const { bills, filteredCategory } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredBills =
    filteredCategory === "All" ? bills : bills.filter((bill) => bill.category === filteredCategory);

  return (
    <div>
      <h2>Bill List</h2>
      <ul>
        {filteredBills.map((bill) => (
          <li key={bill.id}>
            {bill.description} - ₹{bill.amount} ({bill.category}){" "}
            <button onClick={() => dispatch(deleteBill(bill.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
