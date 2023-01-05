import { application } from "express";
import Post from "../model/Post.js";

const post = [];
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).send({
      data: posts,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).send({
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      error: error,
    });
  }
};
export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).send({
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove(id);
    res.status(200).send({
      data: id,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
