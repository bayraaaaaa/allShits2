import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "user didn't exist"],
    minlength: [2, "tiime ner haa bsi"],
    maxlength: [50, "tiim urt ner bhgue"],
  },
  // gender: {
  //   type: String,
  //   enum: {
  //     values: ["male", "female", "none"],
  //     message: "gender not found",
  //   },
  // },

  privacy: String,
  description: String,
  image: String,
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
});
PostSchema.path("userName").validate((userName) => {
  return !/[0-9]/.test(userName);
}, "nerend too orh ysgui");
const Post = mongoose.model("Post", PostSchema);

export default Post;
