import React, { useEffect, useState } from 'react';
import './RecentActivity.css';

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);

  // Fetch recent activities from a backend API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('https://www.codechef.com/users/klu2300031826'); // Update with your backend route
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  // Helper function to calculate the time difference and return a class for heatmap effect
  const getHeatmapClass = (timestamp) => {
    const currentTime = new Date();
    const activityTime = new Date(timestamp);
    const timeDifference = (currentTime - activityTime) / (1000 * 60 * 60); // Time difference in hours

    if (timeDifference <= 1) {
      return 'hot'; // Activities within the last hour
    } else if (timeDifference <= 6) {
      return 'warm'; // Activities within the last 6 hours
    } else if (timeDifference <= 24) {
      return 'cool'; // Activities within the last day
    } else {
      return 'cold'; // Activities older than a day
    }
  };

  return (
    <div className="activity-bar">
      <h2>Recent Activity</h2>
      <ul className="activity-list">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <li key={index} className={`activity-item ${getHeatmapClass(activity.timestamp)}`}>
              {activity.description} — <span className="activity-time">{activity.timestamp}</span>
            </li>
          ))
        ) : (
          <p>No recent activities</p>
        )}
      </ul>
    </div>
  );
};

export default RecentActivity;
