import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const AcademicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date('2024-06-01')); // Start from June 2024
  const [tasks, setTasks] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingLink, setMeetingLink] = useState('');

  const maxDate = new Date('2025-05-31'); // Limit the calendar till May 2025

  // Generate two months starting from currentDate
  const generateMonths = () => {
    return [currentDate, addMonths(currentDate, 1)];
  };

  // Function to generate an array of days for a specific month
  const generateDays = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  const handleAddTask = () => {
    setTasks((prev) => ({
      ...prev,
      [selectedDate]: {
        taskTitle,
        meetingTitle,
        meetingLink,
      },
    }));
    setOpenDialog(false);
    setTaskTitle('');
    setMeetingTitle('');
    setMeetingLink('');
  };

  const handleOpenDialog = (date) => {
    setSelectedDate(format(date, 'yyyy-MM-dd'));
    setOpenDialog(true);
  };

  // Example holidays and important days
  const holidays = ['2024-09-30', '2024-10-10', '2024-09-23', '2024-09-24', '2024-10-13', '2024-09-25'];
  const importantDays = ['2024-10-25', '2024-10-15', '2024-09-05', '2024-09-15', '2024-09-25'];

  const isHoliday = (date) => holidays.includes(format(date, 'yyyy-MM-dd'));
  const isImportantDay = (date) => importantDays.includes(format(date, 'yyyy-MM-dd'));
  const hasEvent = (date) => !!tasks[format(date, 'yyyy-MM-dd')];

  const handleNextMonth = () => {
    const nextMonth = addMonths(currentDate, 2);
    if (nextMonth <= maxDate) {
      setCurrentDate(nextMonth);
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = addMonths(currentDate, -2);
    if (prevMonth >= new Date('2024-06-01')) {
      setCurrentDate(prevMonth);
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f0f4f8', borderRadius: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: 'center', fontWeight: 'bold' }}>
        <h1>Academic Calendar (June 2024 - May 2025)</h1>
        <h1>Academic Calendar (June 2024 - May 2025)</h1>
        <h2>Academic Calendar (June 2024 - May 2025)</h2>
        <h1>Academic Calendar (June 2024 - May 2025)</h1>
        <h1>Academic Calendar (June 2024 - May 2025)</h1>
        <h4>Academic Calendar (June 2024 - May 2025)</h4>
        <h5>Academic Calendar (June 2024 - May 2025)</h5>
        <h1>Academic Calendar (June 2024 - May 2025)</h1>
        <h3>Academic Calendar (June 2024 - May 2025)</h3>
      </Typography>

      <Grid container spacing={4}>
        {generateMonths().map((month, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                  {format(month, 'MMMM yyyy')}
                </Typography>
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                  {generateDays(month).map((date) => (
                    <Grid item xs={1.5} key={date}>
                      <Box
                        sx={{
                          border: '1px solid #ccc',
                          padding: 2,
                          position: 'relative',
                          borderRadius: 1,
                          backgroundColor:
                            isHoliday(date) ? '#b2fbc2' :
                            isImportantDay(date) ? '#f8d7da' :
                            hasEvent(date) ? '#cce5ff' : '#fff',
                          transition: 'background-color 0.3s',
                          '&:hover': {
                            backgroundColor: '#e8e8e8',
                          },
                        }}
                        onClick={() => handleOpenDialog(date)}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
                          {format(date, 'd')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                          {format(date, 'EEEE')}
                        </Typography>
                        {hasEvent(date) && (
                          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            {tasks[format(date, 'yyyy-MM-dd')].taskTitle}
                          </Typography>
                        )}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button variant="outlined" onClick={handlePrevMonth} disabled={currentDate <= new Date('2024-06-01')}>
          Previous
        </Button>
        <Button variant="outlined" onClick={handleNextMonth} disabled={addMonths(currentDate, 2) > maxDate}>
          Next
        </Button>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            label="Task Title"
            fullWidth
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Meeting Title"
            fullWidth
            value={meetingTitle}
            onChange={(e) => setMeetingTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Google Meet Link"
            fullWidth
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddTask} variant="contained" color="primary">
            Add Task
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AcademicCalendar;
