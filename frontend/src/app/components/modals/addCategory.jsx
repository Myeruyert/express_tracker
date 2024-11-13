import React, { useState, useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { MdOutlineRestaurant } from "react-icons/md";
import axios from "axios";
import { CategoryContext } from "../context/category-context";
import { apiUrl } from "@/utils/util";
import { toast } from "react-toastify";

const AddCategory = ({ isOpenCat, close }) => {
  const [categoryData, setCategoryData] = useState({
    name: "",
    description: "",
    category_image: "https://cdn-icons-png.flaticon.com/512/8634/8634546.png", // You might want to handle this with file upload
  });
  const { getCategory } = useContext(CategoryContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(`${apiUrl}/categories`, categoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.message === "Succeed") {
        await getCategory();
        toast.success("Category added successfully!");
        setCategoryData({
          name: "",
          description: "",
          category_image: "",
        });
        close();
      }
    } catch (error) {
      console.error("Failed to add category:", error);
      if (error.response?.status === 401) {
        toast.error("Unauthorized. Please login again.");
      } else {
        toast.error("Failed to add category");
      }
    }
  };

  return (
    <dialog open={isOpenCat} id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Add Category</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm">Category Name</label>
            <input
              type="text"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter category name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm">Description</label>
            <textarea
              name="description"
              value={categoryData.description}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Enter category description"
              required
            />
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={close}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Category
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button onClick={close}>close</button>
      </form>
    </dialog>
  );
};

export default AddCategory;
