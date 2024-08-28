const sql = require("../config/db");

const getAllUser = async(req, res)=>{
    const data = await sql `SELECT * FROM employees`; 
    console.log("data", data); 
    res.status(200).json({message: "Succeed", user: data})
};
const createUser = async (req, res)=>{
    const data = await sql `INSERT INTO employees(dep_id, firstname, lastname, job_title, salary, hired_date, created_at)
    VALUES
    (2, 'Jason', 'Averill', 'Lawyer', 105000, '2021-06-15', '2023-08-01'),
    (1, 'Matt', 'Anderson', 'Project Manager', 85000, '2019-05-20', '2023-08-01');`; 
    console.log("data", data); 
    res.status(200).json({message: "Succeed", user: data})
}; 

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const data = await sql `DELETE FROM employees WHERE eid=${id}`; 
    console.log("data", data); 
    res.status(200).json({message: "deleted successfully", user: data})
}; 

const updateUser = async (req, res) => {
    const {id} = req.params;
    const data = await sql `UPDATE employees SET firstname = 'Anderson' WHERE firstname = 'Matt' AND eid=${id}`; 
    console.log("data", data); 
    res.status(200).json({message: "updated successfully", user:data})
}; 

module.exports = {getAllUser, createUser, updateUser, deleteUser};