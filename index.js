const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.js");
const courseRouter = require("./routes/course.js");
const adminRouter = require("./routes/admin.js");
const app = express();
//added to parse json data

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);
async function main() {
  await mongoose.connect(
    "mongodb+srv://khushi_db_user:fFclFSdzsTunD5YL@cluster0.v4veafz.mongodb.net/cousera-app"
  );
  app.listen(3003);
  console.log("listening on port 3006");
}
main();
