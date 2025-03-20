import { topUserFunction } from '../function/user.function.js'; //from this i will get the top 5 users
export const topUsers = async (req, res) => {
  try {
    //this is my top 5 users with highest number of posts
    const topUser = await topUserFunction();
    if (topUser) {
      res.json(topUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
