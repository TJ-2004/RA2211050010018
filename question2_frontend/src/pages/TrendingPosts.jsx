import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/posts?type=popular',
        );
        setTrendingPosts(response.data);
      } catch (error) {
        console.error('Error fetching trending posts:', error);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-blue-800 mb-6">
        🔥 Trending Posts
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'start',
        }}
      >
        {trendingPosts.length > 0 ? (
          trendingPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-gray-600">No trending posts found.</p>
        )}
      </div>
    </div>
  );
};

export default TrendingPosts;
