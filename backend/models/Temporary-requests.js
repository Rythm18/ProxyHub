// models/AttendanceRequest.js
const mongoose = require('mongoose');

const temporaryRequest = new mongoose.Schema({
  client : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attendanceRequest : { type: mongoose.Schema.Types.ObjectId, ref: 'AttendanceRequest' },
  status : { type: String, default: 'Pending' },
  employee : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  

  // Add other fields as needed for your attendance requests
});

const temporaryReq = mongoose.model('temporaryRequest', temporaryRequest);

module.exports = temporaryReq;
