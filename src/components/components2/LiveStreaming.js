import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const events = [
  {
    title: 'Communication Skills',
    description: 'An online session to learn Communication Skills for new employees.',
    liveStreamUrl: 'https://www.youtube.com/embed/HAnw168huqA',
  },
  {
    title: 'Leadership Training',
    description: 'Developing skills for managing teams, making strategic decisions, and inspiring others.',
    liveStreamUrl: 'https://www.youtube.com/embed/qzoIAJYPQwo',
  },
  {
    title: 'Webinar on AI Tools',
    description: 'Explore the top AI tools for engineers.',
    liveStreamUrl: 'https://www.youtube.com/embed/mEsleV16qdo',
  },
  {
    title: 'Skills for Building Front-End Projects using MERN Stack',
    description: 'Explore the beauty to build a website using the concepts of Node.js and React.js.',
    liveStreamUrl: 'https://www.youtube.com/embed/CvCiNeLnZ00',
  },
  {
    title: 'Skills for Building Front-End Projects using Python',
    description: 'Explore the beauty to build a website using the concepts of OOPs and Python.',
    liveStreamUrl: 'https://www.youtube.com/embed/jBzwzrDvZ18',
  },
  {
    title: 'Skill building using the knowledge of Java Full Course',
    description: 'Learn the concepts of Java from scratch.',
    liveStreamUrl: 'https://www.youtube.com/embed/4XTsAAHW_Tc',
  },
  {
    title: 'Learn C++',
    description: 'Let’s learn the booming subject in the industry, C++. ',
    liveStreamUrl: 'https://www.youtube.com/embed/SYd5F4gIH90',
  },
];


const LiveStreaming = () => {
  const [open, setOpen] = useState(false); // State to manage modal open/close
  const [selectedVideo, setSelectedVideo] = useState(null); // State to track selected video

  // Handle opening the modal with the selected video
  const handleOpenVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setOpen(true);
  };

  // Handle closing the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.pageTitle}>Self Learning and Training</h1>
      <h2 style={styles.pageTitle}>Self Learning and Training</h2>

      <div style={styles.eventsContainer}>
        {events.map((event, index) => (
          <div key={index} style={styles.eventWrapper}>
            <div style={styles.eventContent}>
              <h2 style={styles.eventTitle}>{event.title}</h2>
              <p style={styles.eventDescription}>{event.description}</p>
            </div>
            <div style={styles.videoWrapper}>
              <button
                style={styles.playButton}
                onClick={() => handleOpenVideo(event.liveStreamUrl)}
              >
                Watch Live
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dialog for playing video in modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <Typography variant="h6">Live Stream</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8, color: '#000' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            {selectedVideo && (
              <iframe
                src={selectedVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Live Event Video"
                style={styles.videoIframe}
              ></iframe>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
  },
  pageTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '40px',
  },
  eventsContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allow wrapping to new lines on smaller screens
    justifyContent: 'space-between',
  },
  eventWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 calc(33% - 20px)', // Responsive width: 3 items per row
    margin: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  eventContent: {
    flex: '1',
    textAlign: 'left',
  },
  eventTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  eventDescription: {
    fontSize: '16px',
    color: '#7f8c8d',
  },
  videoWrapper: {
    textAlign: 'center',
  },
  playButton: {
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default LiveStreaming;
