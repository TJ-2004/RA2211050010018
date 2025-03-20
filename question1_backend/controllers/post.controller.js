import { latestPosts, popularPosts } from '../function/post.function.js';

export const topPosts = async (req, res) => {
  try {
    const type = req.query.type || 'latest'; //assuming default is "latest"
    let posts;

    if (type === 'popular') {
      posts = await popularPosts();
    } else if (type === 'latest') {
      posts = await latestPosts();
    } else {
      return res.status(400).json({ error: 'Invalid' });
    }
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
