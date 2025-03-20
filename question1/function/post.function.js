import axios from 'axios';

const token = process.env.token;
const USER_URL = process.env.USER_URL;

// Get all posts from all users
export const fetchAllPosts = async () => {
  const users = await axios.get(`${USER_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const allPosts = [];

  // Loop through all users and get their posts
  for (const userId in users.data.users) {
    const posts = await axios.get(`${USER_URL}/users/${userId}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Add all posts to the list
    allPosts.push(...posts.data.posts);
  }

  return allPosts;
};

// Get comments of a single post
export const fetchComments = async (postId) => {
  const comments = await axios.get(`${USER_URL}/posts/${postId}/comments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return comments.data.comments;
};

// Get popular posts (posts that have the most comments)
export const popularPosts = async () => {
  const allPosts = await fetchAllPosts();

  // For every post, get how many comments it has
  const postCommentCounts = await Promise.all(
    allPosts.map(async (post) => {
      const comments = await fetchComments(post.id);
      return { ...post, commentCount: comments.length };
    }),
  );

  // Sort posts so the one with most comments comes first
  postCommentCounts.sort((a, b) => b.commentCount - a.commentCount);

  // Return only the posts that have the max number of comments
  return postCommentCounts.filter(
    (post) => post.commentCount === postCommentCounts[0].commentCount,
  );
};

// Get the 5 most recent posts
export const latestPosts = async () => {
  const allPosts = await fetchAllPosts();

  // Assuming newer posts have higher IDs
  allPosts.sort((a, b) => b.id - a.id);

  // Return the top 5 latest posts
  return allPosts.slice(0, 5);
};
