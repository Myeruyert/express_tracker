const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  const data = await sql`SELECT * FROM records`;
  console.log("data", data);
  res.status(200).json({ message: "Succeed", record: data });
};
const createRecord = async (req, res) => {
  const data =
    await sql`INSERT INTO records(name, amount, transaction_type, description)
    VALUES
    
    ('Matt', 85000, 'INC', 'description');`;
  console.log("data", data);
  res.status(200).json({ message: "Succeed", record: data });
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`DELETE FROM records WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "deleted successfully", record: data });
};

const updateRecord = async (req, res) => {
  const { id } = req.params;
  const data = await sql`UPDATE records SET name = 'Anderson' WHERE id=${id}`;
  console.log("data", data);
  res.status(200).json({ message: "updated successfully", record: data });
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord };
