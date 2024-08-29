const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM categories`;
  console.log("data", data);
  res.status(200).json({ message: "Succeed", category: data });
};

const createCategory = async (req, res) => {
  const { name, description, category_image } = req.body;
  const data =
    await sql`INSERT INTO categories(name, description, category_image)
    VALUES
    (${name}, ${description}, ${category_image})`;
  console.log("data", data);
  res.status(200).json({ message: "Succeed", category: data });
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM categories WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "deleted successfully", category: data });
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const data = await sql`UPDATE categories SET name = 'Matt' WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "updated successfully", category: data });
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
