// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart(props) {
  console.log("props", props.monthlyData);
  let monthlyData = props.monthlyData;
  const categoriess = Object.keys(monthlyData).map((date) => {
    const [year, month] = date.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]}${year.slice(-2)}`;
  });

  const seriesData = Object.values(monthlyData).map(
    (entries) => entries.length
  );

  const option = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: categoriess,
    },
    colors: ["#FFA500"], // Change line color to orange
  };

  const series = [
    {
      name: "series-1",
      data: seriesData,
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
