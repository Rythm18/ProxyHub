const express = require('express');
const User = require('../../models/User');
const router = express.Router();
const isAuthenticated = require('../../middleware/user-auth');


router.post('/createUser', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    req.session.userId = newUser._id;
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    const user = await User.findOne({ enrollment });
    if (user && user.password === password) {
      req.session.userId = user._id;
      console.log(req.session.userId);
      console.log(user._id);
      res.status(200).json({ message: 'Login successful' });
    } else { 
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to login' });
  }
});



router.get('/users',isAuthenticated, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

router.get('/user/:id',isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
