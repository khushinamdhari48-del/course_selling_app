const { Router } = require("express");
const userRouter = Router();
app.post("/signup", function (req, res) {
  res.json({ message: "User signed up successfully" });
});
app.post("/signin", function (req, res) {
  res.json({ message: "User signed in successfully" });
});
app.get("/purchases", function (req, res) {
  res.json({ message: "Fetched user purchases successfully" });
});

module.exports = userRouter;
