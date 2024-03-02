// models/AttendanceRequest.js
const mongoose = require('mongoose');

const requestTrack = new mongoose.Schema({
  client : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendanceRequest : { type: mongoose.Schema.Types.ObjectId, ref: 'AttendanceRequest' },
  status : { type: String, default: 'Pending' },
  employee : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  

  // Add other fields as needed for your attendance requests
});

const RequestTrack = mongoose.model('RequestTrack', requestTrack);

module.exports = RequestTrack;
