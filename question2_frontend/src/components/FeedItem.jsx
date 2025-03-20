import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const FeedItem = ({ post }) => {
  return (
    <Card style={{ margin: '10px', width: '300px' }}>
      <CardContent>
        <Typography variant="h6">Post ID: {post.id}</Typography>
        <Typography variant="body2">Content: {post.content}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeedItem;