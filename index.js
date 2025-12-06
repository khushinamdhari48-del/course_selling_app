const express = require("express");
const app = express();
app.post("/user/signup", function (req, res) {
  res.json({ message: "User signed up successfully" });
});
app.post("/user/signin", function (req, res) {
  res.json({ message: "User signed in successfully" });
});
app.get("/user/purchases", function (req, res) {
  res.json({ message: "Fetched user purchases successfully" });
});
app.post("/courses/purchases", function (req, res) {
  res.json({ message: "Course purchased successfully" });
});
app.get("/courses", function (req, res) {
  res.json({ message: "Fetched courses successfully" });
});
app.listen(3000);
