"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";
import { toast } from "react-toastify";
import { RecordContext } from "./userRecord-context";
export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  // const [searchValue, setSearchValue] = useState("");
  const { transactionData, refetch, setRefetch } = useContext(RecordContext);

  // const sortingFunc = (a, b) => {
  //   return a.amount - b.amount;
  // };

  // const sortedData = transactionData.sort(sortingFunc);

  // const filteredData = transactionData.filter((data) =>
  //   data?.name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const getCategory = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      setCategories(res.data.data);
      console.log("RECORD", res.data.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to get categories");
    }
  };

  // const handleSort = (e) => {
  //   if (e.target.value === "Lowest first") {
  //     console.log("first");
  //     filteredData.sort((a, b) => a.amount - b.amount);
  //     console.log("transactionData sorted", filteredData);
  //     setRefetch(!refetch);
  //   }
  // };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log("CAT", categories);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategory,
        setCategories,
        // searchValue,
        // setSearchValue,
        // filteredData,
        // handleSort,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
