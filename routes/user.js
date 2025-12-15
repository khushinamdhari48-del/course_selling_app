const { Router } = require("express");
const { userModel, purchaseModel } = require("../db");

const userRouter = Router();
const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  //hashing the password
  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({ message: "User signed up successfully" });
});
userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    email: email,
    password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({ message: "incorrect credentials" });
  }
});

userRouter.get("/purchases", async function (req, res) {
  const userId = req.userId;
  const purchased = await purchaseModel.findOne({
    userId,
    courses,
  });
  res.json({ message: "Fetched user purchases successfully", purchased });
});

module.exports = userRouter;
