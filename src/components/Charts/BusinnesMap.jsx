"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BusinnesMap() {
  const options = {
    chart: {
      id: "cities-bubble-chart",
      type: "bubble",
    },
    xaxis: {
      categories: ["City A", "City B", "City C", "City D", "City E"],
      title: {
        text: "Cities",
      },
    },
    yaxis: {
      title: {
        text: "Number of Businesses",
      },
    },
    title: {
      text: "Business Distribution in Cities",
      align: "left",
    },
    legend: {
      position: "top",
    },
  };

  const series = [
    {
      name: "City A",
      data: [
        {
          x: "City A",
          y: 30,
          z: 10, // Size of the bubble
        },
      ],
    },
    {
      name: "City B",
      data: [
        {
          x: "City B",
          y: 40,
          z: 15,
        },
      ],
    },
    {
      name: "City C",
      data: [
        {
          x: "City C",
          y: 35,
          z: 12,
        },
      ],
    },
    {
      name: "City D",
      data: [
        {
          x: "City D",
          y: 50,
          z: 18,
        },
      ],
    },
    {
      name: "City E",
      data: [
        {
          x: "City E",
          y: 45,
          z: 20,
        },
      ],
    },
  ];

  return (
    <>
      <ApexChart
        options={options}
        series={series}
        type="bubble"
        height={400}
        width={600}
      />
    </>
  );
}
