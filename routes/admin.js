const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../DB.JS");
adminRouter.post("/signup", function (req, res) {
  res.json({ message: "User signed up successfully" });
});
adminRouter.post("/signin", function (req, res) {
  res.json({ message: "User signed in successfully" });
});
adminRouter.get("/purchases", function (req, res) {
  res.json({ message: "Fetched user purchases successfully" });
});
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
adminRouter.put("/course", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
adminRouter.get("/course", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
module.exports = adminRouter;
