const { Router } = require("express");
const userRouter = Router();
userRouter.post("/signup", function (req, res) {
  res.json({ message: "User signed up successfully" });
});
userRouter.post("/signin", function (req, res) {
  res.json({ message: "User signed in successfully" });
});
userRouter.get("/purchases", function (req, res) {
  res.json({ message: "Fetched user purchases successfully" });
});

module.exports = userRouter;
