// const { TbChevronsDownLeft } = require("react-icons/tb");
const sql = require("../config/db");

const getDonutChartData = async (req, res) => {
  try {
    const data =
      await sql`SELECT c.name AS categoryname, SUM(r.amount) AS sumamount FROM records r INNER JOIN categories c ON r.cid=c.id WHERE r.transaction_type='EXP' GROUP BY(c.name);`;
    console.log("categories", data);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const getBarChartData = async (req, res) => {
  try {
    const data = await sql`SELECT 
      TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') AS month, 
      SUM(CASE WHEN r.transaction_type='INC' THEN r.amount ELSE 0 END) as total_inc,
      SUM(CASE WHEN r.transaction_type='EXP' THEN r.amount ELSE 0 END) as total_exp
      FROM records r
      GROUP BY DATE_TRUNC('month', r.created_at)
      ORDER BY DATE_TRUNC('month', r.created_at);`;
    console.log("barchart", data);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const getRecord = async (req, res) => {
  console.log("summ");
  try {
    const { id } = req.params;
    const data =
      await sql`SELECT r.name, r.amount, r.transaction_type, r.created_at, c.name as category_name
    FROM records r INNER JOIN categories c ON r.cid=c.id WHERE r.uid=${id};`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

const getSumRecord = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM records GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
    console.log("incme", income);
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const createRecord = async (req, res) => {
  try {
    const {
      uid,
      cid,
      name,
      amount,
      transaction_type,
      description,
      created_at,
    } = req.body;
    const data =
      await sql`INSERT INTO records(uid, cid, name, amount, transaction_type, description, created_at)
      VALUES
      (${uid}, ${cid}, ${name}, ${amount}, ${transaction_type}, ${description}, ${created_at});`;
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

module.exports = {
  getRecord,
  getDonutChartData,
  getBarChartData,
  getSumRecord,
  createRecord,
  updateRecord,
  deleteRecord,
};
