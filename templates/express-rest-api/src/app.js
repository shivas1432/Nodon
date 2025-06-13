// src/app.js
import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';
import connectDB from './db/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  connectDB();
});
