const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
  res.send('About page');
});


router.post('/submit', (req, res) => {
  const formData = req.body;

  res.send('Form submitted successfully!');
});

module.exports = router;