import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      beginAtZero: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "My Balance",
      fill: false,
      lineTension: 0.5,
      borderColor: "#B57295",
      backgroundColor: "#db86b2",
      borderCapStyle: "butt",
      borderDashOffset: 0.0,
      borderJoinStyle: "#B57295",
      pointBorderColor: "#B57295",
      pointBackgroundColor: "#ffff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#B57295",
      pointHoverBorderColor: "#B57295",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        1000, 2900, 3000, 2500, 3512, 1000, 2000, 3000, 4500, 4000, 5750.2,
      ],
    },
  ],
};

export function DashboardChart() {
  return <Line data={data} options={options} />;
}
