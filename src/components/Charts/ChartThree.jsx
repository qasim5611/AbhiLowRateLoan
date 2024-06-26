// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {
  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: ["June24", "May24", "April24", "March24", "Feb24", "Jan24"],
    },
    colors: ["#FFA500"], // Change line color to orange
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60],
    },
  ];

  return (
    <>
      <ApexChart
        type="line"
        options={option}
        series={series}
        height={230}
        width={500}
      />
    </>
  );
}
