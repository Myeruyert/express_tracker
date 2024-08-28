const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const app = express();
const { logger } = require("./middlewares/logger");

// const userRoutes = require();

app.use(cors());
app.use(express.json());
app.use(logger());

// app.use("/users");

const users = [{ id: 1, username: "Naraa", email: "a@gmail.com" }];

// app.get("/users", (req, res) => {
//   // const data = fs.readFileSync("./users.json", {encoding: "utf8"});
//   // const obData = JSON.parse(data);
//   // res.status(200).json({users: obData.users})
//   res.status(200).json({ users });
// });

// app.post("/users", (req, res) => {
//   console.log("body", req.body);
//   users.push({
//     id: users.length + 1,
//     username: req.body.username,
//     email: req.body.email,
//   });
//   res.status(201).json({ message: "succeed" });
// });

// app.put("/users/:userId", (req, res) => {
//   console.log(req.params);
//   const findIndex = users.findIndex(
//     (user) => user.id === parseInt(req.params.userId)
//   );
//   if (findIndex > -1) {
//     users[findIndex].username = req.body.username;
//     res.status(200).json({ user: users[findIndex] });
//   } else {
//     res.status(400).json({ message: "Not found user" });
//   }
// });

// app.delete("/users/:id", (req,res)=>{
//   const findIndex = users.findIndex((user) => user.id === parseInt(req.params.id));
//   const deletedUser = users.splice(findIndex, 1);
// })

app.get("/user", (req, res) => {
  console.log("all user is read successfully");
  res.json({ message: "get success" });
});
app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});
app.put("/user", (req, res) => {
  console.log("user is updated successfully");
});
app.delete("/user", (req, res) => {
  console.log("user is deleted successfully");
});

app.get("/category", (req, res) => {
  console.log("all category is read successfully");
});
app.post("/category", (req, res) => {
  console.log("New category is created successfully");
});
app.put("/category", (req, res) => {
  console.log("category is updated successfully");
});
app.delete("/category", (req, res) => {
  console.log("category is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
