import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedItem from '../components/FeedItem';

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    const fetchFeedPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts?type=latest');
        setFeedPosts(response.data);
      } catch (error) {
        console.error('Error fetching feed posts:', error);
      }
    };

    fetchFeedPosts();
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {feedPosts.map((post) => (
          <FeedItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;