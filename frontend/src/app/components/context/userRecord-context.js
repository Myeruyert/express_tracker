"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { UserContext } from "./user-context";
import { toast } from "react-toastify";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);
  const [sum, setSum] = useState(null);
  const [sort, setSort] = useState("");

  const fetchSumData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/records/sum`);
      setSum(response.data);
      console.log("SUM", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      if (res.status === 200) {
        const { record } = res.data;
        setTransactionData(record);
        console.log("RECORD", record);
      }
      // console.log("res.data", transactionData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch transaction");
    }
  };

  const handleSort = (e) => {
    if (e.target.value === "Lowest first") {
      console.log("first");
      setTransactionData(transactionData.sort((a, b) => a.amount - b.amount));
      console.log("transactionData sorted", transactionData);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransaction();
    }
  }, [user?.id]);

  return (
    <RecordContext.Provider
      value={{
        transactionData,
        fetchTransaction,
        sum,
        fetchSumData,
        setTransactionData,
        handleSort,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
