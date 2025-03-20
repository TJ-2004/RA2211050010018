import axios from 'axios';

// Getting the token and URL from environment variables
const token = process.env.token;
const USER_URL = process.env.USER_URL;

// This function gets posts from all users
export const fetchAllPosts = async () => {
  // First, we fetch all users
  const users = await axios.get(`${USER_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`, // sending token in the header
    },
  });

  const allPosts = [];

  // Now we loop through each user and get their posts
  for (const userId in users.data.users) {
    const posts = await axios.get(`${USER_URL}/users/${userId}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Add all the posts to one big list
    allPosts.push(...posts.data.posts);
  }

  return allPosts;
};

// This function gets the comments of a specific post
export const fetchComments = async (postId) => {
  const comments = await axios.get(`${USER_URL}/posts/${postId}/comments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return comments.data.comments;
};

// This one finds the popular posts (the ones with the most comments)
export const popularPosts = async () => {
  const allPosts = await fetchAllPosts();

  // For each post, we count how many comments it has
  const postCommentCounts = await Promise.all(
    allPosts.map(async (post) => {
      const comments = await fetchComments(post.id);
      return { ...post, commentCount: comments.length };
    }),
  );

  // Sort posts from most to least comments
  postCommentCounts.sort((a, b) => b.commentCount - a.commentCount);

  // Return only those posts that have the highest comment count
  return postCommentCounts.filter(
    (post) => post.commentCount === postCommentCounts[0].commentCount,
  );
};

// This one gets the latest 5 posts (the newest ones)
export const latestPosts = async () => {
  const allPosts = await fetchAllPosts();

  // Sorting in descending order assuming higher ID means newer
  allPosts.sort((a, b) => b.id - a.id);

  // Picking the first 5 posts after sorting
  return allPosts.slice(0, 5);
};
