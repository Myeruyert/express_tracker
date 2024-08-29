const sql = require("../config/db");

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("data", data);
  res.status(200).json({ message: "Succeed", user: data });
};

const createUser = async (req, res) => {
  const { email, name, password, profile_img } = req.body;
  const data = await sql`INSERT INTO users(email, name, password, profile_img)
    VALUES
    (${email}, ${name}, ${password}, ${profile_img});`;
  console.log("data", data);
  res.status(200).json({ message: "Created succeessfully", user: data });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM users WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "deleted successfully", user: data });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = await sql`UPDATE users SET name = 'Anderson' WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "updated successfully", user: data });
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
