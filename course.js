const { Router } = require("express");
const courseRouter = Router();
app.post("/course/purchases", function (req, res) {
  res.json({ message: "Course purchased successfully" });
});
app.get("/courses/preview", function (req, res) {
  res.json({ message: "Fetched courses successfully" });
});

module.exports = courseRouter;
