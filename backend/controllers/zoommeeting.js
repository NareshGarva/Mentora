import axios from 'axios';

export const createZoomMeeting = async (user, topic, startTime) => {
  try {
    const res = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: topic,
        type: 2, // Scheduled meeting
        start_time: startTime, // Format: '2025-07-25T14:00:00Z'
        duration: 60,
        timezone: 'Asia/Kolkata',
        settings: {
          join_before_host: false,
          approval_type: 0,
          registration_type: 1,
          enforce_login: false,
          waiting_room: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${yourZoomJWTToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return res.data.join_url; // This is the meeting link
  } catch (error) {
    console.error('Zoom Meeting Error:', error.response?.data || error.message);
    return null;
  }
};
