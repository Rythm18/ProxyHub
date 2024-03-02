// models/User.js
const mongoose = require('mongoose');

const getRandomProfilePic = () => {
  const profilePics = [
      '../../uploads/ridham.jpg',
  ];
  const randomIndex = Math.floor(Math.random() * profilePics.length);
  return profilePics[randomIndex];
};

const userSchema = new mongoose.Schema({
  enrollment: { type: Number, required: true, unique: true },
  credits: { type: Number, default: 5 },
  username : { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rating : { type: Number, default: 3 },
  branch: { type: String, required: true },
  profilePic: { type: String, default: getRandomProfilePic() },
});



const User = mongoose.model('User', userSchema);

module.exports = User;
