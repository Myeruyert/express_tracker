"use client";

import { useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { Colors } from "chart.js";
ChartJS.register(Colors);

const Charts = () => {
  return (
    // <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
    //   <canvas ref={chartRef} />
    // </div>
    <>
      <div className="stats text-primary-content w-1/2 h-72 bg-white flex flex-col my-6">
        <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
          <span className="text-slate-900 text-base font-semibold">
            Income - Expence
          </span>
        </div>
        <div className="stat">
          <div className="">
            <Bar
              data={{
                labels: ["A", "b", "c"],
                datasets: [
                  { label: "Revenue", data: [200, 300, 400] },
                  {
                    label: "Loss",
                    data: [20, 40, 50],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="stats text-primary-content w-1/2 h-72 bg-white flex flex-col my-6">
        <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
          <span className="text-slate-900 text-base font-semibold">
            Income - Expence
          </span>
        </div>
        <div className="stat">
          <div className="w-fit">
            <Doughnut
              data={{
                labels: ["A", "b", "c"],
                datasets: [{ label: "Revenue", data: [200, 300, 400] }],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
