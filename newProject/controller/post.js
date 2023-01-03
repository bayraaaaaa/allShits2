import { application } from "express";
import Post from "../model/Post.js";

const post = [];
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (!posts) throw new Error("Not Found", 400);
    res.send({
      data: posts,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    if (!post) throw new Error("Some fucking error", 400);

    res.send({
      data: post,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.send({
      data: post,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate({ _id: id }, req.body);
    if (!post) throw new Error("Input error", 400);
    res.send({
      data: post,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
export const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    res.send({
      data: id,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
