"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { UserContext } from "./user-context";

export const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  // const [record, setRecord] = useState({
  //   name: "",
  //   amount: "",
  //   transaction_type: "",
  //   category_name: "",
  // });

  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState([]);

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

  useEffect(() => {
    if (user && user.id) {
      fetchTransaction();
    }
  }, [user.id]);

  return (
    <RecordContext.Provider value={{ transactionData, fetchTransaction }}>
      {children}
    </RecordContext.Provider>
  );
};
