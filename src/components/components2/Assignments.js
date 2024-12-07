import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const AssignmentPage = () => {
  const [tasks, setTasks] = useState([]);
  const [submittedAssignments, setSubmittedAssignments] = useState({});
  const [taskFiles, setTaskFiles] = useState({});
  const [taskTimers, setTaskTimers] = useState({});

  useEffect(() => {
    // Simulating fetching weekly tasks from an API or local storage
    const weeklyTasks = [
      {
        id: 1,
        title: 'Complete Project Report',
        questions: 'What are the key findings from the project?',
        deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
      },
      {
        id: 2,
        title: 'Prepare Presentation Slides',
        questions: 'Outline the main points for the presentation.',
        deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      },
      {
        id: 3,
        title: 'Complete the First Review',
        questions: 'List the agenda items for discussion.',
        deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
      },
      {
        id: 4,
        title: 'Complete Project Report',
        questions: 'What are the key findings from the project?',
        deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 4 days from now
      },
      {
        id: 5,
        title: 'Prepare Presentation Slides',
        questions: 'Outline the main points for the presentation.',
        deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 2 days from now
      },
      {
        id: 6,
        title: 'Complete the First Review',
        questions: 'List the agenda items for discussion.',
        deadline: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 1 day from now
      },
    ];

    setTasks(weeklyTasks);
    startTimers(weeklyTasks);

    // Cleanup function to clear timers when the component is unmounted
    return () => {
      clearAllTimers();
    };
  }, []);

  const startTimers = (tasks) => {
    tasks.forEach((task) => {
      const countdown = setInterval(() => {
        const remainingTime = task.deadline - new Date();
        if (remainingTime <= 0) {
          clearInterval(countdown); // Stop countdown when deadline passes
        }
        setTaskTimers((prev) => ({
          ...prev,
          [task.id]: remainingTime,
        }));
      }, 1000);
    });
  };

  const clearAllTimers = () => {
    tasks.forEach((task) => {
      clearInterval(taskTimers[task.id]);
    });
  };

  const handleAssignmentSubmit = (taskId) => {
    const fileName = taskFiles[taskId]?.name || 'No file attached';
    setSubmittedAssignments((prev) => ({
      ...prev,
      [taskId]: fileName,
    }));
    setTaskFiles((prev) => ({ ...prev, [taskId]: null })); // Reset the file input
  };

  // Function to format the remaining time in HH:MM:SS format
  const formatTimeRemaining = (remainingTime) => {
    const totalSeconds = Math.floor(remainingTime / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  // Function to calculate the number of days left until the deadline
  const calculateDaysLeft = (deadline) => {
    const remainingTime = deadline - new Date();
    return Math.ceil(remainingTime / (1000 * 60 * 60 * 24)); // Convert to days
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#74c6f6', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        Weekly Assignments
      </Typography>

      <Grid container spacing={4}>
        {tasks.map((task) => (
          <Grid item xs={12} md={4} key={task.id}>
            <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardContent>
                <Typography variant="h5">{task.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Questions: {task.questions}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deadline: {task.deadline.toLocaleString()} - Days left: {calculateDaysLeft(task.deadline)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Remaining: {taskTimers[task.id] ? formatTimeRemaining(taskTimers[task.id]) : '00:00:00'}
                </Typography>
                <input
                  type="file"
                  onChange={(e) => setTaskFiles((prev) => ({ ...prev, [task.id]: e.target.files[0] }))} // Store file per task
                  style={{ marginY: 16 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssignmentSubmit(task.id)}
                  disabled={submittedAssignments[task.id] !== undefined}
                >
                  {submittedAssignments[task.id] !== undefined ? 'Submitted' : 'Submit'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5">Submitted Assignments</Typography>
        <ul>
          {Object.entries(submittedAssignments).map(([id, fileName], index) => (
            <li key={index}>Task ID: {id} - File: {fileName}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default AssignmentPage;
