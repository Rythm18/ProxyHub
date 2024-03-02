// models/AttendanceRequest.js
const mongoose = require('mongoose');

const attendanceRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  class : { type: String, required: true },
  subject: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  // Add other fields as needed for your attendance requests
});

attendanceRequestSchema.virtual('creationTime').get(function () {
    return this.createdAt.getHours() + ':' + this.createdAt.getMinutes() + ':' + this.createdAt.getSeconds();
  });

const AttendanceRequest = mongoose.model('AttendanceRequest', attendanceRequestSchema);

module.exports = AttendanceRequest;
