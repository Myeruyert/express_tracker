"use client";
import { apiUrl } from "@/utils/util";
import { useRef, useEffect, useContext, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Colors, Legend } from "chart.js";
import { UserContext } from "../../context/user-context";
import { toast } from "react-toastify";
import axios from "axios";
ChartJS.register(Colors, Legend);

const Charts = () => {
  const [donChartData, setDonChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [res, setRes] = useState([]);

  const donutChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/donutchart`);
      setDonChartData(res.data.data);
      console.log("D.Chart", donChartData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch chart data");
    }
  };

  const barChart = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/barchart`);
      setBarChartData(res.data.data);
      console.log("B.Chart", barChartData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch chart data");
    }
  };

  useEffect(() => {
    donutChartData();
    barChart();
    // substraction();
  }, []);
  console.log("D.Chart", donChartData);
  console.log("B.Chart", barChartData);

  return (
    <>
      <div className="stats text-primary-content w-1/2 h-full bg-white flex flex-col my-6">
        {/* <div>
          RES
          {barChartData?.map((res) => res.total_inc)}
        </div> */}
        <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
          <span className="text-slate-900 text-base font-semibold">
            Income - Expense
          </span>
        </div>
        <div className="stat">
          <div className="">
            <Bar
              data={{
                labels: barChartData?.map((dt) => dt.month),
                datasets: [
                  {
                    label: "Income",
                    data: barChartData?.map((dt) => dt.total_inc),
                  },
                  {
                    label: "Expense",
                    data: barChartData?.map((dt) => dt.total_exp),
                  },
                ],
              }}
              options={{
                plugins: {
                  colors: {
                    forceOverride: true,
                  },
                },
                // maintainAspectRatio: false,
                // aspectRatio: 1,
              }}
            />
          </div>
        </div>
      </div>
      <div className="stats text-primary-content w-1/2 h-full bg-white flex flex-col my-6">
        <div className="stat-title flex gap-2 items-center border-b-2 py-4 px-6">
          <span className="text-slate-900 text-base font-semibold">
            Income - Expense
          </span>
        </div>
        <div className="stat">
          <div className="w-3/4 h-fit ">
            <Doughnut
              height={400}
              width={400}
              style={{ width: "400px", padding: "0px" }}
              data={{
                labels: donChartData?.map((dnt) => dnt.categoryname),
                datasets: [
                  {
                    // label: chartData?.map((dnt) => dnt.categoryname),
                    data: donChartData?.map((dnt) => dnt.sumamount),
                    // weight: 100,
                    // width: "500px",
                    // fullSize: true,
                  },
                ],
              }}
              options={{
                width: 800,
                height: 900,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      boxWidth: 30,
                      // boxHeight: 10,
                    },
                    fullSize: true,
                  },
                  // data: {
                  // },
                  colors: {
                    forceOverride: true,
                  },
                },
                // aspectRatio: 1,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
