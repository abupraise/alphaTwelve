/*
===============================================================================
  Project Name:    Alpha Twelve
  File:            Chart.jsx
  Author:          Praise Abu
  Created on:      2024-10-24
  Last modified:   2024-10-24
===============================================================================
*/

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartWrapper = styled.div`
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-radius: 1rem;
  border: ${({ isActive }) =>
    isActive ? "none" : ".1rem solid var(--color-grey-100)"};
  width: 99%;
`;

const data = {
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
      data: [700, 900, 800, 500, 1000, 700, 600, 400, 800, 700, 900, 600],
      backgroundColor: "rgba(133, 118, 255, 0.7)",
      borderRadius: 3,
    },
  ],
};

const BarChart = () => {
  const { isDarkMode } = useDarkMode();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: isDarkMode ? "#FCF7FF" : "#ADA9BB",
        },
      },
      title: {
        display: true,
        color: isDarkMode ? "#FCF7FF" : "#ADA9BB",
      },
      tooltip: {
        bodyColor: isDarkMode ? "#FCF7FF" : "#ADA9BB",
        backgroundColor: isDarkMode ? "#ADA9BB" : "#FCF7FF",
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#FCF7FF" : "#484554",
        },
        grid: {
          color: isDarkMode ? "#484554" : "#FCF7FF",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: isDarkMode ? "#FCF7FF" : "#484554",
        },
        grid: {
          color: isDarkMode ? "#6A6676" : "#FCF7FF", 
        },
      },
    },
  };
  return (
    <ChartWrapper isActive={isDarkMode}>
      <Bar data={data} options={options} />
    </ChartWrapper>
  );
};

export default BarChart;