const express = require("express");
const fs = require("fs"); 
const cors = require("cors"); 
const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json()); 

const users = [{ id: 1, username: "Naraa", email: "a@gmail.com"}];

app.get("/users", (req, res)=>{
  // const data = fs.readFileSync("./users.json", {encoding: "utf8"});
  // const obData = JSON.parse(data); 
  // res.status(200).json({users: obData.users})
  res.status(200).json({users});
});

app.post("/users", (req,res)=>{
  console.log("body", req.body);
  users.push({
    id: users.length + 1,
    username: req.body.username, 
    email: req.body.email
  });
  res.status(201).json({message: "succeed"})
})

app.listen(PORT, () => {
  console.log("Server is running at localhost:8000");
});
