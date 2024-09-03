const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT c.name, c.description, c.category_image, 
r.amount, r.transaction_type, r.description, r.name as "record" 
FROM categories c INNER JOIN records r ON r.cid=c.id; `;
    console.log("user", data);
    res.status(200).json({ message: "Succeed", category: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description, category_image } = req.body;
    const data =
      await sql`INSERT INTO categories(name, description, category_image)
      VALUES
      (${name}, ${description}, ${category_image})`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", category: data });
  } catch (error) {
    res.status(400).json({ message: "Couldn't created new user" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM categories WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "deleted successfully", category: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data =
      await sql`UPDATE categories SET name = 'food & drinks' WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "updated successfully", category: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
