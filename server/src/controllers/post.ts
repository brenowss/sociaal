import { Request, Response } from 'express';
import Post from '../models/Post.js';
import User from '../models/User.js';

export const createPost = async (req: Request, res: Response) => {
  try {
    const { userId, location, description, picturePath } = req.body;

    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstName: user?.firstName,
      lastName: user?.lastName,
      location,
      description,
      picturePath,
      userPicturePath: user?.picturePath,
      likes: {},
      comments: [],
    });

    await newPost.save();

    const posts = await Post.find();

    res.status(201).json(posts);
  } catch (error) {
    res.status(409).json({ error });
  }
};

export const getFeedPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const getUserPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(id);
    const isLiked = post?.likes?.get(userId);

    if (isLiked) {
      post?.likes?.delete(userId);
    } else {
      post?.likes?.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post?.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ error });
  }
};
