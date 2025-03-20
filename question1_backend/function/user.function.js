import axios from 'axios';
const token = process.env.token;

const USER_URL = process.env.USER_URL;

// this will give me the top 5 users based on post
export const topUserFunction = async () => {
  try {
    //all users
    const response = await axios.get(`${USER_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = response.data.users;
    const userPostData = [];

    //so going through eaxh user and getting their post
    for (let userId in users) {
      const resPost = await axios.get(`${USER_URL}/users/${userId}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const postCount = resPost.data.posts.length;

      userPostData.push({ //pushing the data into the userPostData array
        userId: userId,
        name: users[userId],
        postCount: postCount,
      });
    }

    userPostData.sort((x, y) => y.postCount - x.postCount); //sorting the post

    //slicing ti get top 5 users
    return userPostData.slice(0, 5);
  } catch (error) {
    console.log('error', error.message);
    throw error;
  }
};
