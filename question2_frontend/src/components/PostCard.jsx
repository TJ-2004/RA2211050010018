import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <Card
      style={{
        margin: '12px',
        width: '320px',
        backgroundColor: '#fafafa',
        border: '1px solid #ddd',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.08)',
        transition: '0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '4px 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.08)';
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          style={{ marginBottom: '6px', color: '#1565c0' }}
        >
          📝 Post #{post.id}
        </Typography>

        <Typography
          variant="body2"
          style={{ fontSize: '0.95rem', marginBottom: '8px', color: '#333' }}
        >
          {post.content}
        </Typography>

        <Typography
          variant="body2"
          style={{ fontSize: '0.85rem', color: '#777' }}
        >
          💬 Comments: {post.commentCount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
