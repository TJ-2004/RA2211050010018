import { commentFunction } from '../function/comment.function.js';

//so this is for getting the comments for the postId that we are passing
export const getComments = async (req, res) => {
  try {
    const postId = req.params.postId; // getting the postId
    const comments = await commentFunction(postId);
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
