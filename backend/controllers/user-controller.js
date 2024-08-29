const sql = require("../config/db");

const getAllUser = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", user: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_img } = req.body;
    const data = await sql`INSERT INTO users(email, name, password, profile_img)
      VALUES
      (${email}, ${name}, ${password}, ${profile_img});`;
    console.log("data", data);
    res.status(200).json({ message: "Created succeessfully", user: data });
  } catch (error) {
    res.status(400).json({ message: "Couldn't created new user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM users WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "deleted successfully", user: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" }); 
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`UPDATE users SET name = 'Anderson' WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "updated successfully", user: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }

};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
