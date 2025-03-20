import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3001/users');
        setTopUsers(res.data);
      } catch (err) {
        console.log('Error fetching users', err);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Top Users</h1>

      <div className="flex flex-wrap gap-5 justify-center items-start">
        {topUsers.length > 0 ? (
          topUsers.map((user) => (
            <div
              key={user.userId}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-[270px] md:w-[230px] lg:w-[250px]"
            >
              <UserCard user={user} />
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-10">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default TopUsers;
