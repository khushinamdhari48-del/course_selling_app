const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "192738392hdk";
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
adminRouter.post("/", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
adminRouter.put("/", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "cousrse added",
  });
});
module.exports = adminRouter;
