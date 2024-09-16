// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { apiUrl } from "@/utils/util";
// import { UserContext } from "./user-context";
// import { toast } from "react-toastify";

// export const RecordContext = createContext();

// export const RecordProvider = ({ children }) => {
//   const { user } = useContext(UserContext);
//   const [transactionData, setTransactionData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [sum, setSum] = useState(null);
//   const [refetch, setRefetch] = useState(false);
//   const [searchValue, setSearchValue] = useState("");

//   // const [incData, setIncData] = useState(null);
//   // const fetchIncData = async () => {
//   //   try {
//   //     const res = await axios.get(`${apiUrl}/records/inc`);
//   //     setIncData(res.data.record);
//   //   } catch (error) {
//   //     console.log(error);
//   //     toast.error("Failed to fetch chart data");
//   //   }
//   // };

//   const fetchSumData = async () => {
//     try {
//       const response = await axios.get(`${apiUrl}/records/sum`);
//       setSum(response.data);
//       // console.log("SUM", response.data);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   const fetchTransaction = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/records/${user.id}`);
//       if (res.status === 200) {
//         const { record } = res.data;
//         setTransactionData(record);
//         setFilteredData(record);
//         setExpValue(record);
//         setIncValue(record);
//         // console.log("RECORD", record);
//       }
//       // console.log("res.data", transactionData);
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to fetch transaction");
//     }
//   };

//   const filterFunc = () => {
//     const filtered = transactionData.filter((data) =>
//       data?.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const filteredByInc = () => {
//     const filteredInc = transactionData.filter((data) =>
//       data?.transaction_type.includes("INC")
//     );
//     setFilteredData(filteredInc);
//     console.log("filterByInc", filteredInc);
//   };

//   const filteredByExp = () => {
//     const filteredExp = transactionData.filter((data) =>
//       data?.transaction_type.includes("EXP")
//     );
//     setFilteredData(filteredExp);
//     console.log("filterByExp", filteredExp);
//   };

//   // const filteredByInc = (e) => {
//   //   console.log("TYPEE", e.target.value);
//   //   if (e.target.value === "INC") {
//   //     setFilteredData([
//   //       ...filteredData.filter((data) =>
//   //         data?.transaction_type.includes("INC")
//   //       ),
//   //     ]);
//   //     console.log("transactionDataBYEXP", filteredData);
//   //     return;
//   //   } else {
//   //     console.log("first");
//   //   }
//   // };

//   // const filteredByExp = (e) => {
//   //   console.log("TYPEE", e.target.value);
//   //   if (e.target.value === "EXP") {
//   //     setFilteredData([
//   //       ...filteredData.filter((data) =>
//   //         data?.transaction_type.includes("EXP")
//   //       ),
//   //     ]);
//   //     console.log("transactionDataBYEXP", filteredData);
//   //     return;
//   //   } else {
//   //     console.log("first");
//   //   }
//   // };

//   const handleSort = (e) => {
//     console.log("SORT", e.target.value);
//     if (e.target.value === "0") {
//       fetchTransaction();
//     } else if (e.target.value === "1") {
//       console.log("first");
//       setFilteredData([...filteredData.sort((a, b) => a.amount - b.amount)]);
//       console.log("transactionData sorted", filteredData);
//       return;
//     } else {
//       console.log("last");
//       setFilteredData([...filteredData.sort((a, b) => b.amount - a.amount)]);
//     }
//   };

//   useEffect(() => {
//     if (user && user.id) {
//       fetchTransaction();
//     }
//   }, [user?.id, refetch]);

//   useEffect(() => {
//     filterFunc();
//     // filteredByInc();
//     // filteredByExp();
//   }, [searchValue]);

//   useEffect(() => {
//     filteredByInc();
//     filteredByExp();
//   }, []);

//   console.log("filteredData", filteredData);

//   return (
//     <RecordContext.Provider
//       value={{
//         transactionData,
//         fetchTransaction,
//         sum,
//         fetchSumData,
//         setTransactionData,
//         handleSort,
//         filteredData,
//         refetch,
//         setRefetch,
//         searchValue,
//         setSearchValue,
//         filteredByExp,
//         filteredByInc,
//         // filteredByType,
//       }}>
//       {children}
//     </RecordContext.Provider>
//   );
// };
