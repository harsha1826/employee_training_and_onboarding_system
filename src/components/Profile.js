import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const userData = {
  name: "TULASI HARSHA VARDHAN",
  email: "2300031826@kluniversity.in",
  bio: "Online Auction System",
  profilePic: "/static/images/avatar.jpg", // You can replace it with any default or dynamic image
};

function Profile() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* User Avatar */}
        <Avatar
          alt={userData.name}
          src={userData.profilePic}
          sx={{ width: 100, height: 100, mb: 2 }}
        />

        {/* User Name */}
        <Typography component="h1" variant="h5">
          {userData.name}
        </Typography>

        {/* User Email */}
        <Typography variant="body1" color="textSecondary" gutterBottom>
          {userData.email}
        </Typography>

        <Divider sx={{ width: '100%', mt: 2, mb: 2 }} />

        {/* User Bio */}
        <Typography variant="body1" align="center">
          {userData.bio}
        </Typography>

        {/* Edit Profile Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => alert('Edit Profile functionality is not implemented yet.')}
        >
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
}

export default Profile;
