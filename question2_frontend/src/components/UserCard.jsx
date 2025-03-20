import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card
      style={{
        margin: '12px',
        width: '220px',
        backgroundColor: '#fefefe',
        transition: 'all 0.2s ease-in-out',
        border: '1px solid #e0e0e0',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.04)';
        e.currentTarget.style.boxShadow = '4px 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '2px 2px 6px rgba(0,0,0,0.1)';
      }}
    >
      <CardContent>
        <Typography variant="h6" style={{ color: '#1976d2', marginBottom: '6px' }}>
          {user.name}
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.9rem', color: '#555' }}>
          Posts: {user.postCount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
