import express from "express";
import {
  getAllPosts,
  createPost,
  getPostById,
  removePost,
  updatePost,
} from "../controller/post.js";
const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPostById).put(updatePost).delete(removePost);

export default router;
