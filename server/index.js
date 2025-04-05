require('dotenv').config(); // Must be at the very top!
require('dotenv').config();
console.log(" Mongo URI loaded:", process.env.MONGO_URI); // Add this


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('MERN Backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

