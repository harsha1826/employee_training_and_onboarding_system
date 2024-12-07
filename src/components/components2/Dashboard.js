import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaVideo, FaCalendarAlt, FaBell } from 'react-icons/fa'; // Optional: Importing icons

const Dashboard = () => {
  const [progress, setProgress] = useState(0);
  const [watchedVideos, setWatchedVideos] = useState([]);
  const navigate = useNavigate();
  const [upcomingTrainings, setUpcomingTrainings] = useState([
    { title: 'Advanced JavaScript', date: 'Sept 30, 2024' },
    { title: 'React Masterclass', date: 'Oct 5, 2024' },
  ]);
  const [notifications, setNotifications] = useState([
    'Annual Team Meeting on Oct 15th. Register in advance!',
    'New training modules available on the platform.',
    'Your feedback is valuable! Please take a moment to provide it.',
  ]);

  const goToCourses = () => {
    navigate('/livestreaming');
  };

  useEffect(() => {
    // Simulate fetching user progress and watched videos from an API or local storage
    const userProgress = 56; // Example: 70% completion
    const userWatchedVideos = [
      { title: 'Communication Skills', date: 'Sept 20, 2024' },
      { title: 'Webinar on AI Tools', date: 'Sept 25, 2024' },
      { title: 'Learn C++', date: 'Sept 30, 2024' },
      { title: 'Skills for Building Front-End Projects using MERN Stack', date: 'Sept 28, 2024' },
    ];

    setProgress(userProgress);
    setWatchedVideos(userWatchedVideos);
  }, []);

  return (
    <Box className="dashboard-container" sx={{ padding: 3, backgroundColor: '#e3f2fd', borderRadius: 2, height: '100vh', overflow: 'auto' }}>
      <Typography variant="h4" sx={{ marginBottom: 4, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
        Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Progress Section */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#c5cae9', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaVideo style={{ marginRight: 8 }} /> Your Progress
              </Typography>
              <Box sx={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: 2, marginY: 2 }}>
                <Box
                  sx={{
                    width: `${progress}%`,
                    backgroundColor: '#3f51b5',
                    height: '24px',
                    borderRadius: 2,
                  }}
                />
              </Box>
              <Typography>{progress}% Completed</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Training Sessions */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#ffe0b2', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaCalendarAlt style={{ marginRight: 8 }} /> Upcoming Training Sessions
              </Typography>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {upcomingTrainings.map((training, index) => (
                  <li key={index} style={{ margin: '8px 0' }}>
                    {training.title} - {training.date}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Watched Videos Section */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#c8e6c9', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaVideo style={{ marginRight: 8 }} /> Watched Videos
              </Typography>
              {watchedVideos.length > 0 ? (
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  {watchedVideos.map((video, index) => (
                    <li key={index} style={{ margin: '8px 0' }}>
                      {video.title} - {video.date}
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography>No videos watched yet.</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Announcements Section */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, backgroundColor: '#ffccbc', '&:hover': { boxShadow: 6 } }}>
            <CardContent>
              <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
                <FaBell style={{ marginRight: 8 }} /> Important Announcements
              </Typography>
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {notifications.map((notification, index) => (
                  <li key={index} style={{ margin: '8px 0' }}>
                    {notification}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Action Button */}
      <Box sx={{ marginTop: 4, textAlign: 'right' }}>
        <Button onClick={goToCourses} variant="contained" color="primary" sx={{ backgroundColor: '#3f51b5', '&:hover': { backgroundColor: '#303f9f' } }}>
          Start New Training
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
