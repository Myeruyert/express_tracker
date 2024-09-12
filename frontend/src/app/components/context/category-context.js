// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { apiUrl } from "@/utils/util";
// import { UserContext } from "./user-context";

// export const CategoryContext = createContext();

// export const CategoryProvider = ({ children }) => {
//   // const [record, setRecord] = useState({
//   //   name: "",
//   //   amount: "",
//   //   transaction_type: "",
//   //   category_name: "",
//   // });

//   const [categories, setCategories] = useState(null);

//   const getCategory = async () => {
//     try {
//       const res = await axios.get(`${apiUrl}/categories`);
//       setCategories(res.data.data);
//       console.log("RECORD", res.data.data);
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to get categories");
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   // const [categories, setCategories] = useState(null);

//   // const getCategory = async () => {
//   //   try {
//   //     const token = localStorage.getItem("token");
//   //     const res = await axios.get(`${apiUrl}/categories`, {
//   //       category_name,
//   //       id,
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //     });
//   //     if (res.status === 200) {
//   //       console.log("Cats", res.data.data);
//   //       setCategories(res.data);
//   //       console.log("Cats", res.data);
//   //     }
//   //   } catch (error) {
//   //     console.log("getCat", error);
//   //   }
//   // };

//   return (
//     <CategoryContext.Provider
//       value={{ categories, getCategory, setCategories }}
//     >
//       {children}
//     </CategoryContext.Provider>
//   );
// };
