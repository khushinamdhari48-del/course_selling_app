const { Router } = require("express");
const courseRouter = Router();
courseRouter.post("/course/purchases", function (req, res) {
  res.json({ message: "Course purchased successfully" });
});
courseRouter.get("/courses/preview", function (req, res) {
  res.json({ message: "Fetched courses successfully" });
});

module.exports = courseRouter;
