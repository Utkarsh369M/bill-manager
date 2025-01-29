import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const BillChart = () => {
  const { bills } = useSelector((state) => state);

  const data = {
    labels: bills.map((bill) => bill.date),
    datasets: [
      {
        label: "Monthly Bills",
        data: bills.map((bill) => bill.amount),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default BillChart;
