import { Request, Response } from 'express';
import User from '../models/User.js';

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getUserFriends = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);

    const friends = await Promise.all(
      user?.friends?.map((friendId: string) => {
        return User.findById(friendId);
      }) || []
    );

    const formattedFriends = friends.map(
      ({
        _id,
        firstName,
        lastName,
        picturePath,
        viewedProfile,
        impressions,
      }: any) => {
        return {
          _id,
          firstName,
          lastName,
          picturePath,
          viewedProfile,
          impressions,
        };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addRemoveFriend = async (req: Request, res: Response) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user?.friends?.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);

      if (friend) {
        friend.friends =
          friend?.friends?.filter((friend) => friend !== id) ?? [];
      }
    } else {
      user?.friends?.push(friendId);

      if (friend) {
        friend?.friends?.push(id);
      }
    }
    await user?.save();
    await friend?.save();

    return getUserFriends(req, res);
  } catch (error) {
    res.status(500).json({ error });
  }
};
