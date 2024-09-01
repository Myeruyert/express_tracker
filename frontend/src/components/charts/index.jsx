"use client";

import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Colors } from "chart.js";
Chart.register(Colors);

export default function Charts() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");
      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 15, 15],
              backgroundColor: [
                // "rgba(28, 100, 242, 1)",
                // "rgba(231, 70, 148, 1)",
                // "rgba(253, 186, 140, 1)",
                // "rgba(22, 189, 202, 1)",
                // "rgba(242, 144, 28, 1)",
              ],
              // borderColor: ["blue", "pink", "yellow", "teal", "orange"],
              borderWidth: 1,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          // scales: {
          //   x: {
          //     type: "category",
          //   },
          //   y: {
          //     beginAtZero: true,
          //   },
          // },
          plugins: {
            colors: {
              forceOverride: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    // <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
    //   <canvas ref={chartRef} />
    // </div>
    <div className="stats text-primary-content w-1/2 h-72 bg-white flex flex-col my-6">
      <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
        <span className="text-slate-900 text-base font-semibold">
          Income - Expence
        </span>
      </div>
      <div className="stat">
        <div className="w-52 h-52 flex">
          <canvas ref={chartRef} className="flex" style={{ display: "flex" }} />
        </div>
      </div>
    </div>
  );
}
