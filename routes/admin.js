const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
JWT_ADMIN_PASSWORD = "192738392hdk";
//const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
adminRouter.post("/signup", async function (req, res) {
  //bcrpyt //zod
  const { email, password, firstName, lastName } = req.body;
  //hashing the password
  await adminModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({ message: "User signed up successfully" });
});
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await adminModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "incorrect credentials" });
  }
});
adminRouter.get("/purchases", function (req, res) {
  res.json({ message: "Fetched user purchases successfully" });
});
adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });

  res.json({
    message: "cousrse added",
  });
});
adminRouter.put("/course/update", async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    {
      _id: courseId,
      craetorId: adminId,
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price,
      creatorId: adminId,
    }
  );

  res.json({
    message: "cousrse updated",
  });
});
adminRouter.get("course/bulk", async function (req, res) {
  const adminId = req.userId;
  const courses = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    message: "cousrse added",
    courses,
  });
});
module.exports = adminRouter;
