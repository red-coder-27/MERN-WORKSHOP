const express = require('express');
const router = express.Router();

// GET /api/message
router.get('/', (req, res) => {
  res.json({ message: 'Hello from MongoDB API!' });
});

module.exports = router;
