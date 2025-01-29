import React from "react";
import { useDispatch } from "react-redux";
import { filterBills } from "../redux/actions";

const FilterBills = () => {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(filterBills(e.target.value))}>
      <option value="All">All Categories</option>
      <option value="FoodNDining">Food & Dining</option>
      <option value="Utility">Utility</option>
      <option value="Shopping">Shopping</option>
      <option value="Education">Education</option>
      <option value="Personal Care">Personal Care</option>
      <option value="Travel">Travel</option>
    </select>
  );
};

export default FilterBills;
