import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../redux/actions";

const BillForm = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill({ id: Date.now(), description, category, amount }));
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <button type="submit">Add Bill</button>
    </form>
  );
};

export default BillForm;
