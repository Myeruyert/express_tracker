const sql = require("../config/db");

const getRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const data =
      await sql`SELECT r.name, r.amount, r.transaction_type, c.name as category_name
    FROM records r INNER JOIN categories c ON r.cid=c.id WHERE r.uid=${id};`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const createRecord = async (req, res) => {
  try {
    const { uid, cid, name, amount, transaction_type, description } = req.body;
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
    const data =
      await sql`UPDATE records SET name = 'breakfast' WHERE id=${id}`;
    console.log("data", data);
    res.status(200).json({ message: "updated successfully", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user id" });
  }
};

module.exports = { getRecord, createRecord, updateRecord, deleteRecord };
