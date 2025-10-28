const express = require("express");
const adminRoutes = require("./src/routes/adminRoutes");
const authController = require("./src/controller/authController");

const app = express();

app.use("/admin", adminRoutes);
app.get("/login", () => {
  console.log("login");
});

app.post("/login", authController.login);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
