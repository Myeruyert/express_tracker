const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const data = await sql`SELECT u.email, u.password, u.name, u.profile_img, 
r.amount, r.transaction_type, r.description, r.name as "category" 
FROM users u INNER JOIN records r ON r.uid=u.id;`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", record: data }); 
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const createRecord = async (req, res) => {
  try {
    const {uid, cid, name, amount, transaction_type, description} = req.body;
    const data =
      await sql`INSERT INTO records(uid, cid, name, amount, transaction_type, description)
      VALUES
      (${uid}, ${cid}, ${name}, ${amount}, ${transaction_type}, ${description});`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", record: data });
  } catch (error) {
    res.status(400).json({ message: "Couldn't created new user" });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`DELETE FROM records WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "deleted successfully", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }
};

const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await sql`UPDATE records SET name = 'breakfast' WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "updated successfully", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord };
