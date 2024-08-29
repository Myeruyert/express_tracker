const express = require("express");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger());
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/records", recordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`);
});
