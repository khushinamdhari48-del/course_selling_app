const { Schema, default: mongoose } = require("mongoose");
console.log("connected to");
mongoose.connect(
  "mongodb+srv://khushi_db_user:fFclFSdzsTunD5YL@cluster0.v4veafz.mongodb.net/cousera-app"
);

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});
const adminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});
const courseSchema = new Schema({
  title: String,
  DecompressionStream: String,
  price: Number,
  imageUrl: String,
  creatorId: mongoose.Schema.Types.ObjectId,
});
const purchaseSchema = new Schema({
  userId: mongoose.Schema.Types.ObjectId,
  courseId: mongoose.Schema.Types.ObjectId,
});
const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("Admin", adminSchema);
const courseModel = mongoose.model("Course", courseSchema);
const purchaseModel = mongoose.model("Purchase", purchaseSchema);
module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
