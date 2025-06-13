// src/routes/index.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to REST API!' });
});

export default router;
