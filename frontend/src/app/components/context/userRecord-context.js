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
  const [filteredData, setFilteredData] = useState([]);
  const [sum, setSum] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [incValue, setIncValue] = useState("");
  const [expValue, setExpValue] = useState("");

  const fetchSumData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Fetching sum data with token:", token);

      const response = await axios.get(`${apiUrl}/records/sum`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Sum data response:", response.data);

      if (response.data.message === "success") {
        setSum({
          expense: response.data.expense,
          income: response.data.income,
        });
      }
    } catch (error) {
      console.error("Error fetching sum data:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        toast.error(error.response.data.message || "Failed to fetch sum data");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received");
        toast.error("Server not responding");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        toast.error("Error setting up request");
      }
    }
  };

  const fetchTransaction = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/${user.id}`);
      if (res.status === 200) {
        const { record } = res.data;
        setTransactionData(record);
        setFilteredData(record);
        setExpValue(record);
        setIncValue(record);
        // console.log("RECORD", record);
      }
      // console.log("res.data", transactionData);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch transaction");
    }
  };

  const filterFunc = () => {
    const filtered = transactionData.filter((data) =>
      data?.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const filteredByInc = () => {
    const filteredInc = transactionData.filter((data) =>
      data?.transaction_type.includes("INC")
    );
    setFilteredData(filteredInc);
    console.log("filterByInc", filteredInc);
  };

  const filteredByExp = () => {
    const filteredExp = transactionData.filter((data) =>
      data?.transaction_type.includes("EXP")
    );
    setFilteredData(filteredExp);
    console.log("filterByExp", filteredExp);
  };

  const selectAll = () => {
    fetchTransaction();
  };

  const handleSort = (e) => {
    console.log("SORT", e.target.value);
    if (e.target.value === "0") {
      fetchTransaction();
    } else if (e.target.value === "1") {
      console.log("first");
      setFilteredData([...filteredData.sort((a, b) => a.amount - b.amount)]);
      console.log("transactionData sorted", filteredData);
      return;
    } else {
      console.log("last");
      setFilteredData([...filteredData.sort((a, b) => b.amount - a.amount)]);
    }
  };

  useEffect(() => {
    if (user && user.id) {
      fetchTransaction();
    }
  }, [user?.id, refetch]);

  useEffect(() => {
    filterFunc();
    // filteredByInc();
    // filteredByExp();
  }, [searchValue]);

  useEffect(() => {
    filteredByInc();
    filteredByExp();
  }, []);

  useEffect(() => {
    if (user && user.id) {
      fetchSumData();
    }
  }, [user?.id]);

  console.log("filteredData", filteredData);

  return (
    <RecordContext.Provider
      value={{
        transactionData,
        fetchTransaction,
        sum,
        fetchSumData,
        setTransactionData,
        handleSort,
        filteredData,
        refetch,
        setRefetch,
        searchValue,
        setSearchValue,
        setIncValue,
        setExpValue,
        filteredByExp,
        filteredByInc,
        selectAll,
      }}>
      {children}
    </RecordContext.Provider>
  );
};
