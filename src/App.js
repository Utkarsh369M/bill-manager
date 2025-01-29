import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BillForm from "./components/BillForm";
import BillList from "./components/BillList";
import BillChart from "./components/BillChart";
import FilterBills from "./components/FilterBills";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Bill Manager</h1>
      <BillForm />
      <FilterBills />
      <BillList />
      <BillChart />
    </Provider>
  );
};

export default App;
