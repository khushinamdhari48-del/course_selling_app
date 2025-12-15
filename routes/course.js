const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();
courseRouter.post("/purchases", async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;
  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({ message: "Course purchased successfully" });
});
courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel.find({});
  res.json({
    courses,
  });
});

module.exports = courseRouter;
