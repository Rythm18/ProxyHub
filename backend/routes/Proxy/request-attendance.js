const express = require('express');
const AttendanceRequest = require('../../models/AttendanceRequest');
const RequestTrack = require('../../models/RequestTract');
const isAuthenticated = require('../../middleware/user-auth');
const User = require('../../models/User');
const router = express.Router();

// POST /user
router.post('/request-attendance', isAuthenticated, async (req, res) => {
  try {
      const newAttendanceRequest = new AttendanceRequest({
        user: req.session.userId,
        class: req.body.class,
        subject: req.body.subject,
        date: req.body.date,
      });

      await newAttendanceRequest.save();
      res.status(201).json({ message: 'Attendance request created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create attendance request' });
  }
});

// GET /requests

router.get('/requestsUsers',isAuthenticated, async (req, res) => {
  try {
    const requests = await AttendanceRequest.find({ user: req.session.userId });
    const data = await User.findById(req.session.userId);
    res.status(200).json({requests});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch attendance requests' });
  }
});

router.get('/requests', isAuthenticated, async (req, res) => {
  try {
    const requests = await AttendanceRequest.find({ status: 'Pending', user : { $ne: req.session.userId } });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch attendance requests' });
  }
});


module.exports = router;
