"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const options = {
    chart: {
      id: "apexchart-example",
      type: "donut", // Change chart type to donut
    },
    labels: ["Refinanced Users", "Buy Home Users"], // Labels for each data point
    colors: ["#008000", "#ffd085"],
  };

  const series = [30, 40]; // Series data

  return (
    <>
      <ApexChart
        options={options}
        series={series}
        type="donut"
        height={250}
        width={500}
      />
    </>
  );
}
