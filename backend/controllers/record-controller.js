// const { TbChevronsDownLeft } = require("react-icons/tb");
const sql = require("../config/db");

const getDonutChartData = async (req, res) => {
  try {
    const { id } = req.user;
    const data = await sql`
      SELECT 
        c.name AS categoryname, 
        SUM(r.amount) AS sumamount 
      FROM records r 
      INNER JOIN categories c ON r.cid=c.id 
      WHERE r.transaction_type='EXP' AND r.uid=${id}
      GROUP BY c.name;
    `;

    console.log("Donut chart data:", data);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    console.error("Error in getDonutChartData:", error);
    res.status(400).json({ message: "Failed to get chart data" });
  }
};

const getBarChartData = async (req, res) => {
  try {
    const { id } = req.user;
    const data = await sql`
      SELECT 
        TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') AS month, 
        SUM(CASE WHEN r.transaction_type='INC' THEN r.amount ELSE 0 END) as total_inc,
        SUM(CASE WHEN r.transaction_type='EXP' THEN r.amount ELSE 0 END) as total_exp
      FROM records r
      WHERE r.uid=${id}
      GROUP BY DATE_TRUNC('month', r.created_at)
      ORDER BY DATE_TRUNC('month', r.created_at);
    `;

    console.log("Bar chart data:", data);
    res.status(200).json({ message: "success", data });
  } catch (error) {
    console.error("Error in getBarChartData:", error);
    res.status(400).json({ message: "Failed to get chart data" });
  }
};

const getRecord = async (req, res) => {
  console.log("summ");
  try {
    const { id } = req.params;
    const data =
      await sql`SELECT r.name, r.amount, r.transaction_type, r.created_at, c.name as category_name
    FROM records r INNER JOIN categories c ON r.cid=c.id WHERE r.uid=${id} ORDER BY created_at DESC;`;
    console.log("data", data);
    res.status(200).json({ message: "Succeedeeeeed", record: data });
  } catch (error) {
    res.status(400).json({ message: "Not found user" });
  }
};

// const getIncRecord = async (req, res) => {
//   console.log("summ");
//   try {
//     const data =
//       await sql`SELECT r.name, r.amount, r.transaction_type, r.created_at, c.name as category_name
//     FROM records r INNER JOIN categories c ON r.cid=c.id WHERE transaction_type='INC' ORDER BY created_at DESC;`;
//     console.log("data", data);
//     res.status(200).json({ message: "Succeedeeeeed", record: data });
//   } catch (error) {
//     res.status(400).json({ message: "Not found user" });
//   }
// };

const getRecordSum = async (req, res) => {
  try {
    const { id } = req.user;
    console.log("Calculating sum for user:", id);

    // Get expense sum - using uid instead of user_id
    const [expense] = await sql`
      SELECT COALESCE(SUM(amount), 0) as sum 
      FROM records 
      WHERE uid=${id} AND transaction_type='EXP'
    `;

    // Get income sum
    const [income] = await sql`
      SELECT COALESCE(SUM(amount), 0) as sum 
      FROM records 
      WHERE uid=${id} AND transaction_type='INC'
    `;

    console.log("Sums calculated:", { expense, income });

    res.status(200).json({
      message: "success",
      expense,
      income,
    });
  } catch (error) {
    console.error("Error in getRecordSum:", error);
    res.status(400).json({ message: "Error getting sum" });
  }
};

const createRecord = async (req, res) => {
  try {
    const { uid, cid, name, amount, transaction_type, description } = req.body;
    console.log("REC-BODY", req.body);
    const data =
      await sql`INSERT INTO records(uid, cid, name, amount, transaction_type, description)
      VALUES
      (${uid}, ${cid}, ${name}, ${amount}, ${transaction_type}, ${description});`;
    console.log("data", data);
    res.status(200).json({ message: "Succeed", record: data });
  } catch (error) {
    console.log(error);
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
  // getIncRecord,
  getDonutChartData,
  getBarChartData,
  getRecordSum,
  createRecord,
  updateRecord,
  deleteRecord,
};
