import axios from 'axios';

const token = process.env.token;
const USER_URL = process.env.USER_URL;

// Fetch comments for a post with post Id
export const commentFunction = async (postId) => {
  try {
    const response = await axios.get(`${USER_URL}/posts/${postId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.comments;
  } catch (error) {
    console.log(error);
  }
};
