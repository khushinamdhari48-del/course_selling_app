const express = require("express");
const userRouter = require("./routes/user.js");
const courseRouter = require("./routes/course.js");
const adminRouter = require("./routes/admin.js");
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(3003, () => {});
