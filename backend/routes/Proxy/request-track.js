const express = require('express');
const AttendanceRequest = require('../../models/AttendanceRequest');
const RequestTrack = require('../../models/RequestTract');
const isAuthenticated = require('../../middleware/user-auth');
const router = express.Router();
const temporaryRequest = require('../../models/Temporary-requests');
//Get in-progress requests

router.get('/progress-requests-employee', isAuthenticated, async (req, res) => {
    try {
        const requests = await RequestTrack.find({ status: 'inProgress', employee: req.session.userId });

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch attendance requests' });
    }
});

router.get('/progress-requests-client', isAuthenticated, async (req, res) => {
    try {
        const requests = await temporaryRequest.find({ status: 'Pending', client: req.session.userId });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch attendance requests' });
    }
});

router.post('/become-employer/:client/:attendanceRequestId', isAuthenticated, async (req, res) => {
    try {
      const { client, attendanceRequestId } = req.params;
  
      const TemporaryRequest = new temporaryRequest({
        client,
        attendanceRequest: attendanceRequestId,
        status: 'Pending',
        employee: req.session.userId,
      });

      await TemporaryRequest.save();
  
      res.status(200).json({ message: 'Temporary request sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send temporary request' });
    }
  });

router.post('/accept-employee/:employee/:attendanceRequestId', isAuthenticated, async (req, res) => {
    try {
        const { employee, attendanceRequestId } = req.params;
    
        const permanentRequest = new RequestTrack({
          client : req.session.userId,
          attendanceRequest: attendanceRequestId,
          status: 'inProgress',
          employee,
        });
  
        await permanentRequest.save();

        await temporaryRequest.deleteMany({attendanceRequest: attendanceRequestId });
    
        res.status(200).json({ message: 'Permanent request sent successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
      }
  });



module.exports = router;
