const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
